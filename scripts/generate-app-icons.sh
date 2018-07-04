#!/bin/zsh

# Exit the script on any command with non 0 return code
set -e

npx sharp -i ./static/favicon.ico -o ./static/icons/favicon-16x16.png resize 16
npx sharp -i ./static/favicon.ico -o ./static/icons/favicon-32x32.png resize 32
npx sharp -i ./static/favicon.ico -o ./static/icons/favicon-96x96.png resize 96
npx sharp -i ./src/images/portrait.png -o ./static/icons/apple-touch-icon-152x152.png resize 152
npx sharp -i ./src/images/portrait.png -o ./static/icons/apple-touch-icon-144x144.png resize 144
npx sharp -i ./src/images/portrait.png -o ./static/icons/apple-touch-icon-120x120.png resize 120
npx sharp -i ./src/images/portrait.png -o ./static/icons/apple-touch-icon-114x114.png resize 114
npx sharp -i ./src/images/portrait.png -o ./static/icons/apple-touch-icon-76x76.png resize 76
npx sharp -i ./src/images/portrait.png -o ./static/icons/apple-touch-icon-72x72.png resize 72
npx sharp -i ./src/images/portrait.png -o ./static/icons/apple-touch-icon-60x60.png resize 60
npx sharp -i ./src/images/portrait.png -o ./static/icons/apple-touch-icon-57x57.png resize 57