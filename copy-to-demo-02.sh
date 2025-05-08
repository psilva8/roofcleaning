#!/bin/bash

# Path to your Demo-02 project - update this path!
DEMO_02_PATH="/Users/paulsilva/Documents/Demo-02"

# Check if the destination directory exists
if [ ! -d "$DEMO_02_PATH" ]; then
    echo "Error: Demo-02 directory not found at $DEMO_02_PATH"
    echo "Please update the DEMO_02_PATH variable in this script with the correct path."
    exit 1
fi

# Create directories if they don't exist
mkdir -p "$DEMO_02_PATH/src/app"
mkdir -p "$DEMO_02_PATH/src/components/sections"
mkdir -p "$DEMO_02_PATH/public/images"

# Copy source files
echo "Copying source files..."
cp -r src/app/* "$DEMO_02_PATH/src/app/"
cp -r src/components/* "$DEMO_02_PATH/src/components/"

# Copy configuration files
echo "Copying configuration files..."
cp package.json package-lock.json next.config.js postcss.config.js tailwind.config.js tsconfig.json "$DEMO_02_PATH/"

# Copy public files (images, etc.)
echo "Copying public files..."
cp -r public/* "$DEMO_02_PATH/public/"

# Copy README
cp README.md "$DEMO_02_PATH/"

echo "Done! Files have been copied to $DEMO_02_PATH"
echo "Remember to run 'npm install' in your Demo-02 directory if needed." 