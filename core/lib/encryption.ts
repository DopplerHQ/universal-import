import tweetnacl from "tweetnacl-util";
import tweetnaclSealedbox from "tweetnacl-sealedbox-js";
const { encodeBase64, decodeBase64 } = tweetnacl;
const { seal } = tweetnaclSealedbox;
const DOPPLER_UNIVERSAL_KEY_URL = "REPLACE_POST_COMPILE_DOPPLER_UNIVERSAL_KEY_URL";
let keyInfoPromise: Promise<KeyInfo>;

export interface KeyInfo {
  keyId: string;
  publicKey: Uint8Array;
}

export async function fetchKeyInfo() {
  const url = new URL(DOPPLER_UNIVERSAL_KEY_URL);
  url.searchParams.append("cpv", "REPLACE_CORE_PACKAGE_VERSION");

  if (!keyInfoPromise) {
    keyInfoPromise = fetch(DOPPLER_UNIVERSAL_KEY_URL)
      .then((res) => res.json())
      .then((json) => ({
        keyId: json.keyId,
        publicKey: decodeBase64(json.publicKey),
      }));
  }

  return keyInfoPromise;
}

export async function encrypt(plainText: string, keyInfo: KeyInfo) {
  const encrypted = seal(new TextEncoder().encode(plainText), keyInfo.publicKey);
  return encodeBase64(encrypted);
}
