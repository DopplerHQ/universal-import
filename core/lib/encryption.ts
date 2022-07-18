import { seal } from "tweetnacl-sealedbox-js";
import { encodeBase64, decodeBase64 } from "tweetnacl-util";

const DOPPLER_UNIVERSAL_KEY_URL = "https://keys.doppler.life/universal-import/latest.json";

export interface KeyInfo {
  keyId: string;
  publicKey: Uint8Array;
}

export async function fetchKeyInfo() {
  const res = await fetch(DOPPLER_UNIVERSAL_KEY_URL);
  const json = await res.json();

  return {
    keyId: json.keyId,
    publicKey: decodeBase64(json.publicKey),
  };
}

export async function encrypt(plainText: string, keyInfo: KeyInfo) {
  const encrypted = seal(new TextEncoder().encode(plainText), keyInfo.publicKey);
  return encodeBase64(encrypted);
}
