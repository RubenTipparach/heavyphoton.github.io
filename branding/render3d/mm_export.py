"""Export Material Maker .ptex graphs to Blender texture sets, headless.

Material Maker is a Godot app, so it needs a display and a GPU: Xvfb plus
Mesa's lavapipe Vulkan driver stand in for both (apt install xvfb
mesa-vulkan-drivers). Its exporter does not quit when it is done, so this
watches stdout for "Done" and then stops it. Each file gets its own process
and a time limit, because a graph that never finishes would otherwise hold
up every file queued behind it. On this software renderer Material Maker
also segfaults now and then while it is still loading the graph, and the
same file exports cleanly on the next try, so a crash is retried.

Usage: python3 mm_export.py OUT_DIR file1.ptex [file2.ptex ...]
Set MM to the material_maker.x86_64 path if it is not the default below.
"""
import os
import subprocess
import sys
import time

MM = os.environ.get("MM", "/opt/tools/material_maker_1_7_linux/material_maker.x86_64")
LIMIT = 240  # seconds per file


def export_one(path, out):
    # "-t" is Godot's own --always-on-top flag, so the target is spelled out.
    cmd = ["xvfb-run", "-a", "-s", "-screen 0 1280x1024x24", "stdbuf", "-oL",
           MM, "--export", "--target", "Blender", "-o", out, path]
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                         cwd=os.path.dirname(MM), start_new_session=True)
    fd = p.stdout.fileno()
    os.set_blocking(fd, False)
    t0 = time.time()
    buf, ok = "", False
    while time.time() - t0 < LIMIT and p.poll() is None:
        try:
            buf += os.read(fd, 65536).decode("utf-8", "replace")
        except BlockingIOError:
            pass
        if "\nDone" in buf:
            ok = True
            break
        time.sleep(0.25)
    time.sleep(1)
    try:
        os.killpg(p.pid, 9)
    except ProcessLookupError:
        pass
    for line in buf.splitlines():
        if line.startswith(("SCRIPT ERROR", "Failed")):
            print("   ", line)
    print("%-28s %s in %.1fs" % (os.path.basename(path), "ok" if ok else "FAILED",
                                 time.time() - t0), flush=True)
    return ok


def export_retrying(path, out, tries=4):
    for _ in range(tries):
        if export_one(path, out):
            return True
        time.sleep(2)
    return False


def main():
    out = os.path.abspath(sys.argv[1])
    os.makedirs(out, exist_ok=True)
    results = [export_retrying(os.path.abspath(f), out) for f in sys.argv[2:]]
    return 0 if all(results) else 1


if __name__ == "__main__":
    sys.exit(main())
