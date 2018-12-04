#!/bin/bash

# setup
FILES=*.mp4
SEEK_POINT=00:00:00
IMG_FORMAT=png

for f in $FILES
do
  echo "Generating thumbnail for $f ..."
  ffmpeg -i "$f" -y -an -ss $SEEK_POINT -vcodec $IMG_FORMAT -r 1 -vframes 1 "$f".png
  echo "===================================================="
done


# ffmpeg -i 2.mp4 -y -an -ss 00:00:01 -vcodec png -r 1 -vframes 1 2.png