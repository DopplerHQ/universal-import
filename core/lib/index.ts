import * as encryption from "./encryption.js";
import * as utils from "./utils.js";
import * as modal from "./modal.js";

export interface DopplerImport {
  secretName: string;
  secretValue: string;
}

export async function fetchKeyInfo() {
  return await encryption.fetchKeyInfo();
}

export async function trigger(props: DopplerImport) {
  const { secretName, secretValue } = props;
  const resolvedKey = await fetchKeyInfo();
  const secrets = [{ name: secretName, value: secretValue }];
  const payload = utils.createPayload(secrets);
  const encrypted = await encryption.encrypt(payload, resolvedKey);
  const base64URLSafe = utils.buildURLSafeBase64(encrypted);
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  modal.open(base64URLSafe, resolvedKey.keyId);
}
