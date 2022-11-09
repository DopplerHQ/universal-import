#!/bin/bash
echo "Replacing REPLACE_POST_COMPILE_DOPPLER_UNIVERSAL_KEY_URL"
# String manipulation escapes forward slashes with a backslash ${main_string/search_term/replace_term}
sed -i -e "s/REPLACE_POST_COMPILE_DOPPLER_UNIVERSAL_KEY_URL/${UNIVERSAL_IMPORT_KEYS_URL//\//\\/}/" ./dist/index.js

echo "Replacing REPLACE_POST_COMPILE_DOPPLER_DASHBOARD_URL"
# String manipulation escapes forward slashes with a backslash ${main_string/search_term/replace_term}
sed -i -e "s/REPLACE_POST_COMPILE_DOPPLER_DASHBOARD_URL/${DOPPLER_DASHBOARD_URL//\//\\/}/" ./dist/modal.js

PACKAGE_CORE_VERSION=$(cat package.json | jq -r .version)

echo "Replacing REPLACE_CORE_PACKAGE_VERSION with $PACKAGE_CORE_VERSION"
sed -i -e "s/REPLACE_CORE_PACKAGE_VERSION/$PACKAGE_CORE_VERSION/" ./dist/encryption.js
sed -i -e "s/REPLACE_CORE_PACKAGE_VERSION/$PACKAGE_CORE_VERSION/" ./dist/modal.js

echo "Completed replacements!"
