import { decodeBase64, encodeBase64 } from "tweetnacl-util";
import * as nacl from "tweetnacl-sealedbox-js";
import { encrypt, fetchKeyInfo } from "./encryption";

describe("encryption", () => {
  describe("fetchKeyInfo", () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            keyId: "keyId",
            publicKey: encodeBase64(new TextEncoder().encode("publicKey")),
          }),
      });
    }) as jest.Mock;

    const spy = jest.spyOn(global, "fetch");
    describe("Given fetchKeyInfo() is called", () => {
      test("Then it will return a promise containing the key information", async () => {
        const res = fetchKeyInfo();
        expect(res).toHaveProperty("then");
        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe("encrypt", () => {
    // A randomly generated key for the purpose of these tests
    const key = {
      keyId: "c9031324-dc95-4a72-87e0-f1371e39cc1e",
      publicKey: decodeBase64("ey82QJJnfuk5H4cqdM2kYEEqIHlth0ZwMR5zn4R+wXU="),
      privateKey: decodeBase64("IFMuWtDxeKbnwq4xcZnWkVoCFnZvt9jwwvXCC6Xnj0I="),
    };

    describe("Given encrypt() is called with plainText: 'blazingly fast!'", () => {
      describe("And it returns the base64 encoded cipherText", () => {
        test("Then the decrypted cipherText should match the given plainText", async () => {
          const plainText = "blazingly fast!";

          const base64EncodedCipherText = await encrypt(plainText, {
            keyId: key.keyId,
            publicKey: key.publicKey,
          });

          // eslint-disable-next-line security/detect-non-literal-fs-filename
          const decryptedCipherText = nacl.open(
            decodeBase64(base64EncodedCipherText),
            key.publicKey,
            key.privateKey,
          );

          expect(decryptedCipherText).not.toBeUndefined();
          expect(new TextDecoder().decode(decryptedCipherText)).toBe(plainText);
        });
      });
    });
  });
});
