#!/bin/bash

echo "@zero65:registry=https://asia-south1-npm.pkg.dev/zero65/npm/" > ~/.npmrc

mkdir -p ~/.config/gcloud
if [ -n "$GOOGLE_APPLICATION_CREDENTIALS_BASE64" ]; then
    echo "$GOOGLE_APPLICATION_CREDENTIALS_BASE64" | base64 --decode > ~/.config/gcloud/application_default_credentials.json
elif [ -n "$GOOGLE_APPLICATION_CREDENTIALS_JSON" ]; then
    echo "$GOOGLE_APPLICATION_CREDENTIALS_JSON" > ~/.config/gcloud/application_default_credentials.json
fi

npm install -g google-artifactregistry-auth nodemon

npx google-artifactregistry-auth && npm install && npm run dev
