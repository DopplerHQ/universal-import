import tweetnacl from "tweetnacl-util";
import tweetnaclSealedbox from "tweetnacl-sealedbox-js";
const { encodeBase64, decodeBase64 } = tweetnacl;
const { seal } = tweetnaclSealedbox;

const DOPPLER_UNIVERSAL_KEY_URL = "REPLACE_POST_COMPILE_DOPPLER_UNIVERSAL_KEY_URL";
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
