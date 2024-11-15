#!/bin/bash

# add all files
git add -A

# read input
read -p "Commit description: " input

# commit all files with message
git commit -m "$input"

# push code
git push

