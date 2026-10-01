#!/usr/bin/env python3
"""Flatten the primary lockup into named polygons for the Blender build.

Reads branding/raygun-v2-branded.svg and writes shapes.json: one entry per
visible leaf (rect, polygon or path), with its fill, the ids of the groups it
sits in, and its outline(s) in SVG user units with every transform applied.

Only straight-edged shapes exist in the lockup, so the path parser handles
M/L/H/V/Z in both cases and nothing else; anything it does not know raises
rather than guessing. Groups with style="display:none" (the old relief
layers) are skipped along with everything inside them.

A second pass merges each letter's pieces into one outline (shapely), so a
bevel does not draw a ridge where an H's crossbar meets its stems, and tags
every part with the role the Blender build gives it.

    pip install shapely
    python3 svg_shapes.py
"""
import json
import os
import re
import xml.etree.ElementTree as ET

from shapely.geometry import Polygon
from shapely.ops import unary_union

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "raygun-v2-branded.svg")
OUT = os.path.join(HERE, "shapes.json")
NS = "{http://www.w3.org/2000/svg}"


def mat_mul(a, b):
    """Compose 2D affine matrices stored as (a, b, c, d, e, f), SVG order."""
    a1, b1, c1, d1, e1, f1 = a
    a2, b2, c2, d2, e2, f2 = b
    return (a1 * a2 + c1 * b2, b1 * a2 + d1 * b2,
            a1 * c2 + c1 * d2, b1 * c2 + d1 * d2,
            a1 * e2 + c1 * f2 + e1, b1 * e2 + d1 * f2 + f1)


def parse_transform(s):
    m = (1, 0, 0, 1, 0, 0)
    if not s:
        return m
    for name, args in re.findall(r"(\w+)\s*\(([^)]*)\)", s):
        v = [float(x) for x in re.split(r"[\s,]+", args.strip()) if x]
        if name == "translate":
            t = (1, 0, 0, 1, v[0], v[1] if len(v) > 1 else 0)
        elif name == "scale":
            t = (v[0], 0, 0, v[1] if len(v) > 1 else v[0], 0, 0)
        elif name == "matrix":
            t = tuple(v)
        else:
            raise ValueError("unsupported transform " + name)
        m = mat_mul(m, t)
    return m


def apply(m, pts):
    a, b, c, d, e, f = m
    return [(a * x + c * y + e, b * x + d * y + f) for x, y in pts]


def parse_path(d):
    toks = re.findall(r"[MmLlHhVvZz]|-?\d*\.?\d+(?:e-?\d+)?", d)
    subpaths, cur, i = [], [], 0
    x = y = 0.0
    cmd = None
    while i < len(toks):
        t = toks[i]
        if re.match(r"[A-Za-z]", t):
            cmd = t
            i += 1
            if cmd in "Zz":
                if cur:
                    subpaths.append(cur)
                    x, y = cur[0]
                cur = []
                continue
        elif cmd is None:
            raise ValueError("path data starts with a number")
        if cmd in "Mm":
            nx, ny = float(toks[i]), float(toks[i + 1])
            i += 2
            if cmd == "m":
                nx, ny = x + nx, y + ny
            if cur:
                subpaths.append(cur)
            cur = [(nx, ny)]
            x, y = nx, ny
            cmd = "l" if cmd == "m" else "L"  # implicit lineto after moveto
        elif cmd in "Ll":
            nx, ny = float(toks[i]), float(toks[i + 1])
            i += 2
            if cmd == "l":
                nx, ny = x + nx, y + ny
            x, y = nx, ny
            cur.append((x, y))
        elif cmd in "Hh":
            v = float(toks[i]); i += 1
            x = x + v if cmd == "h" else v
            cur.append((x, y))
        elif cmd in "Vv":
            v = float(toks[i]); i += 1
            y = y + v if cmd == "v" else v
            cur.append((x, y))
        else:
            raise ValueError("unsupported path command " + cmd)
    if cur:
        subpaths.append(cur)
    # Drop a closing point that repeats the first.
    out = []
    for sp in subpaths:
        if len(sp) > 1 and abs(sp[0][0] - sp[-1][0]) < 1e-9 and abs(sp[0][1] - sp[-1][1]) < 1e-9:
            sp = sp[:-1]
        out.append(sp)
    return out


def hidden(el):
    return "display:none" in (el.get("style") or "").replace(" ", "")


def walk(el, m, fill, groups, out):
    if hidden(el):
        return
    m = mat_mul(m, parse_transform(el.get("transform")))
    fill = el.get("fill") or fill
    tag = el.tag.replace(NS, "")
    if tag == "g":
        gid = el.get("id")
        for ch in el:
            walk(ch, m, fill, groups + ([gid] if gid else []), out)
        return
    if tag == "rect":
        x, y = float(el.get("x", 0)), float(el.get("y", 0))
        w, h = float(el.get("width")), float(el.get("height"))
        loops = [[(x, y), (x + w, y), (x + w, y + h), (x, y + h)]]
    elif tag == "polygon":
        v = [float(t) for t in re.split(r"[\s,]+", el.get("points").strip()) if t]
        loops = [list(zip(v[0::2], v[1::2]))]
    elif tag == "path":
        loops = parse_path(el.get("d"))
    else:
        return
    out.append({
        "id": el.get("id"),
        "fill": fill.lower() if fill else None,
        "groups": groups,
        "loops": [apply(m, lp) for lp in loops],
    })


def part_key(shape):
    """(name, role) for the 3D part a leaf belongs to."""
    g = shape["groups"]
    if g[0] == "beam":
        return "beam", "beam"
    if g[0] in ("word-heavy", "word-photon"):
        return g[1], ("heavy" if g[0] == "word-heavy" else "photon")
    if g[0] == "shelf":
        return ("rail", "rail") if shape["fill"] == "#3ee0ff" else ("shelf", "gun")
    if g[0] == "gun":
        return g[1], "gun"
    if g[0].startswith("fin-"):
        return g[0], "fin"
    raise ValueError("unplaced shape %r" % shape["id"])


def leaf_polygon(shape):
    """Even-odd fill: the first loop is the outline, the rest are holes."""
    outer, *holes = shape["loops"]
    return Polygon(outer, holes).buffer(0)


def merge(shapes):
    parts = {}
    for s in shapes:
        name, role = part_key(s)
        p = parts.setdefault(name, {"name": name, "role": role, "fill": s["fill"], "geoms": []})
        p["geoms"].append(leaf_polygon(s))
    out = []
    for p in parts.values():
        u = unary_union(p.pop("geoms"))
        polys = list(u.geoms) if u.geom_type == "MultiPolygon" else [u]
        p["polys"] = []
        for poly in polys:
            poly = poly.simplify(0.01)
            p["polys"].append({
                "outer": [list(c) for c in poly.exterior.coords[:-1]],
                "holes": [[list(c) for c in r.coords[:-1]] for r in poly.interiors],
            })
        b = u.bounds
        p["bounds"] = [round(v, 3) for v in b]
        out.append(p)
    return out


def main():
    root = ET.parse(SRC).getroot()
    shapes = []
    for ch in root:
        tag = ch.tag.replace(NS, "")
        if tag == "rect" and hidden(ch):
            continue  # the backing rect
        walk(ch, (1, 0, 0, 1, 0, 0), None, [], shapes)
    parts = merge(shapes)
    with open(OUT, "w") as f:
        json.dump({"source": "raygun-v2-branded.svg", "units": "svg px, y down",
                   "parts": parts}, f, indent=1)
    print(f"{len(shapes)} leaves -> {len(parts)} parts -> {OUT}")


if __name__ == "__main__":
    main()
