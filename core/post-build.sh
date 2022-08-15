#!/bin/bash
echo "Replacing REPLACE_POST_COMPILE_DOPPLER_UNIVERSAL_KEY_URL..."
# String manipulation escapes forward slashes with a backslash ${main_string/search_term/replace_term}
sed -i -e "s/REPLACE_POST_COMPILE_DOPPLER_UNIVERSAL_KEY_URL/${UNIVERSAL_IMPORT_KEYS_URL//\//\\/}/" ./dist/encryption.js
echo "Replacing completed!"