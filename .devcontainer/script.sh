#!/bin/bash

echo "@zero65:registry=https://asia-south1-npm.pkg.dev/zero65/npm/" > ~/.npmrc

if [ -n "$GOOGLE_APPLICATION_CREDENTIALS_BASE64" ]; then
    echo "$GOOGLE_APPLICATION_CREDENTIALS_BASE64" | base64 --decode > ~/service-account.json
elif [ -n "$GOOGLE_APPLICATION_CREDENTIALS_JSON" ]; then
    echo "$GOOGLE_APPLICATION_CREDENTIALS_JSON" > ~/service-account.json
fi

export GOOGLE_APPLICATION_CREDENTIALS="$HOME/service-account.json"

npm install -g google-artifactregistry-auth typescript nodemon

npx google-artifactregistry-auth && npm install && npm run start:dev
