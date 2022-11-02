import { encodeBase64 } from "tweetnacl-util";
import { buildURLSafeBase64, createPayload, ImportPayload } from "./utils";

describe("utils", () => {
  describe("createPayload", () => {
    describe("Given a unique secret is given to createPayload", () => {
      test("Then the created payload should contain one secret", () => {
        const secrets = [
          {
            name: "MY_SECRET",
            value: "VALUE",
          },
        ];

        const expectedPayloadLength = secrets.length;

        const stringifiedPayload = createPayload(secrets);
        expect(typeof stringifiedPayload).toBe("string");

        const jsonPayload = JSON.parse(stringifiedPayload) as ImportPayload;
        expect(jsonPayload.secrets).toHaveLength(expectedPayloadLength);
        expect(jsonPayload.version).toBe(1);
        expect(jsonPayload.timestamp).toBeDefined();
      });
    });
  });

  describe("buildURLSafeBase64", () => {
    describe("Given a base64 URL is passed to buildURLSafeBase64", () => {
      test("Then the returned base64 value should be URL safe", () => {
        const url =
          "https://dashboard.doppler.com/import?payload=some_payload&keyId=c9031324-dc95-4a72-87e0-f1371e39cc1e";
        const base64 = encodeBase64(new TextEncoder().encode(url));

        const urlSafeBase64 = buildURLSafeBase64(base64);
        const regexURLSafeBase64 = /(-)?(_)?/gi;

        expect(Buffer.from(base64, "base64").toString().toString()).toBe(url);

        expect(urlSafeBase64.match(regexURLSafeBase64)).not.toContain("/");
        expect(urlSafeBase64.match(regexURLSafeBase64)).not.toContain("+");
      });
    });
  });
});
