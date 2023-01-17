import * as encryption from "./encryption.js";
import * as utils from "./utils.js";
import * as modal from "./modal.js";

const DOPPLER_UNIVERSAL_KEY_URL = "REPLACE_POST_COMPILE_DOPPLER_UNIVERSAL_KEY_URL";
export interface DopplerImport {
  secretName: string;
  secretValue: string;
}

export async function fetchKeyInfo() {
  return await encryption.fetchKeyInfo(DOPPLER_UNIVERSAL_KEY_URL);
}

const secretNameRegex = /^[A-Z_]+[A-Z0-9_]*$/;
export function validateSecretName(secretName: string) {
  if (!secretNameRegex.test(secretName)) {
    console.error(
      `Invalid secret name: ${secretName}. Secret names must be uppercased and may only contain letters, numbers and underscores`,
    );
  }
}

export async function trigger(props: DopplerImport) {
  const { secretName, secretValue } = props;
  validateSecretName(secretName);
  const resolvedKey = await fetchKeyInfo();
  const secrets = [{ name: secretName, value: secretValue }];
  const payload = utils.createPayload(secrets);
  const encrypted = await encryption.encrypt(payload, resolvedKey);
  const base64URLSafe = utils.buildURLSafeBase64(encrypted);
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  modal.open(base64URLSafe, resolvedKey.keyId);
}
