#!/usr/bin/env bash

# Go to the installation folder
cd /var/www/lestaubiere/

echo "### Print dependency versions ###"
echo "node: `node -v`"
echo "npm: `npm -v`"

# Get the latest version via git
echo "### Getting the latest version via git ###"
git fetch origin
git reset origin/development --hard

# Install Front-end dependencies for Vue
echo "### Installing Front-end depenencies for Vue ###"
yarn

# Set the deployment time
echo "### Set the deployment time in the config file ###"
time=$(date +"%d/%m/%Y %H:%M")
echo "{\"updated_at\": \"${time}\"}" > /var/www/lestaubiere/src/config/deployment.json

# Build the staging environment
echo "### Building the Staging environment for Vue ###"
npm run build
