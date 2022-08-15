#!/bin/bash

set -euf -o pipefail

if [ "$(doppler configure get project --plain)" != "universal-import-button-build" ] ; then
    echo "Setting up universal-import-button-build secrets access at $PWD"
    echo "Select your branch config:"
    doppler setup --project universal-import-button-build
else
    echo "universal-import-button-build is already setup."
fi

echo "Confirming doppler is correctly setup..."
if ! doppler secrets get VITE_DOPPLER_DASHBOARD_URL --plain > /dev/null 2>&1 ; then
  echo "Unable to access secrets for the server project. Re-run to fix."
  exit 1
fi

echo "Doppler setup is successful!"
