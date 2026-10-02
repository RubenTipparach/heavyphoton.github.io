#!/bin/sh
# The film from the finished frames (finish.py), at the rate timing.json gives,
# with the soundtrack (audio/soundtrack.wav) when there is one.
set -e
D=${1:-out}
HERE=$(cd "$(dirname "$0")" && pwd)
FPS=$(python3 -c "import json,sys; print(json.load(open(sys.argv[1]))['fps'])" "$D/timing.json" 2>/dev/null || echo 15)
WAV="$HERE/audio/soundtrack.wav"
if [ -f "$WAV" ]; then
  ffmpeg -y -loglevel error -framerate "$FPS" -start_number 1 -i "$D/final/f_%04d.png" -i "$WAV" \
    -c:v libx264 -preset slow -crf 12 -pix_fmt yuv420p -c:a aac -b:a 192k -shortest "$D/plate_shop.mp4"
else
  ffmpeg -y -loglevel error -framerate "$FPS" -start_number 1 -i "$D/final/f_%04d.png" \
    -c:v libx264 -preset slow -crf 12 -pix_fmt yuv420p "$D/plate_shop.mp4"
fi
ffprobe -v error -show_entries format=duration:stream=codec_type,width,height,nb_frames -of compact "$D/plate_shop.mp4"
# Small renders also get a 4x nearest-neighbour copy, so the pixels stay crisp in a player.
W=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$D/plate_shop.mp4")
if [ "$W" -lt 400 ]; then
  ffmpeg -y -loglevel error -i "$D/plate_shop.mp4" -vf scale=iw*4:ih*4:flags=neighbor -c:v libx264 -crf 12 \
    -pix_fmt yuv420p -c:a copy "$D/plate_shop_4x.mp4"
fi
