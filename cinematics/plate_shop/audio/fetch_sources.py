#!/usr/bin/env python3
"""Download the soundtrack's sources from OpenGameArt into sources/.

They are not committed (about 220 MB of archives). Every file the mix uses is
listed in credits.json with its download URL and where it goes; mix.py
unpacks the archives itself.

    python3 fetch_sources.py && python3 mix.py
"""
import json
import os
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))


def main():
    cues = json.load(open(os.path.join(HERE, "credits.json")))["cues"]
    seen = set()
    jobs = [(u, c["local_path"]) for c in cues
            for u in (c["file_url"] if isinstance(c["file_url"], list) else [c["file_url"]])]
    for url, where in jobs:
        if url in seen:
            continue
        seen.add(url)
        dest_dir = os.path.join(HERE, where)
        os.makedirs(dest_dir, exist_ok=True)
        dest = os.path.join(dest_dir, os.path.basename(urllib.request.unquote(url)))
        if os.path.exists(dest):
            print("have", os.path.relpath(dest, HERE))
            continue
        print("get ", url)
        urllib.request.urlretrieve(url, dest)
    print("%d files in sources/" % len(seen))


if __name__ == "__main__":
    main()
