declare module "tweetnacl-sealedbox-js" {
  declare function seal(Uint8Array: plainText, Uint8Array: publicKey): Uint8Array;
  declare function open(
    Uint8Array: sealedbox,
    Uint8Array: publicKey,
    Uint8Array: privateKey,
  ): Uint8Array | undefined;
}
