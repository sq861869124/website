#!/usr/bin/env bash

command=$1
dll_manifest='./public/static/manifest.json'

if [ -f "$dll_manifest" ]; then
  echo 'dll exist😁'
  eval $command
else
  echo 'dll not exist, start to generate'
  eval "npm run dll && $command"
fi
