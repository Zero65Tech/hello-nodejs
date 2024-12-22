#!/bin/bash

if [ -n "$GOOGLE_APPLICATION_CREDENTIALS_BASE64" ]; then
    echo "@zero65:registry=https://asia-south1-npm.pkg.dev/zero65/npm/" > ~/.npmrc
    mkdir -p ~/.config/gcloud
    echo "$GOOGLE_APPLICATION_CREDENTIALS_BASE64" | base64 --decode > ~/.config/gcloud/application_default_credentials.json
    npm install -g google-artifactregistry-auth nodemon
    npx google-artifactregistry-auth
fi

npm update && npm run dev
