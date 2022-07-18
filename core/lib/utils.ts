export function createPayload(secretName: string, secretValue: string) {
  return JSON.stringify({
    secret: {
      name: secretName,
      value: secretValue,
    },
    timestamp: Date.now(),
  });
}

export function buildURLSafeBase64(base64: string) {
  return base64.replace(/\+/g, "-").replace(/\//g, "_");
}
