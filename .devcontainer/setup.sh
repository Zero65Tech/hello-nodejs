#!/bin/bash

echo "@zero65:registry=https://asia-south1-npm.pkg.dev/zero65/npm/" > ~/.npmrc

echo "$GOOGLE_APPLICATION_CREDENTIALS_JSON" > ~/service-account.json
export GOOGLE_APPLICATION_CREDENTIALS="$HOME/service-account.json"
echo "$GOOGLE_APPLICATION_CREDENTIALS"

npm install -g google-artifactregistry-auth nodemon

npx google-artifactregistry-auth
npm install

echo "DONE !" > ./.devcontainer/DONE
