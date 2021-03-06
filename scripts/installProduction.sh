#!/usr/bin/env bash

# Go to the installation folder
cd /var/www/lestaubiere/client/

echo "### Print dependency versions ###"
echo "node: `node -v`"
echo "npm: `npm -v`"

# Get the latest version via git
echo "### Getting the latest version via git ###"
git fetch origin
git reset origin/master --hard

# Install Front-end dependencies for Vue
echo "### Installing Front-end depenencies for Vue ###"
yarn

# Build the production environment
echo "### Building the Production environment for Vue ###"
npm run build
