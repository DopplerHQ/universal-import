import { utils, encryption } from "@doppler/import-button-core";
import Logo from "./assets/Logo";
import ImportSVG from "./assets/ImportText";
import ButtonStyles from "./assets/ButtonStyles";
import ReactShadow from "./util/ReactShadow";

const DOPPLER_URL = "https://dashboard.dopplerlocal.com:3030";

// We'll trigger fetching the key info *outside* of the React component itself so that we:
// 1. Only fetch the key once, regardless of how many times the button will be rendered
// 2. Fetch the key as soon as the button renders to remove delay in the onClick handler
const keyInfoPromise = encryption.fetchKeyInfo();

function openImportTab(payload: string, keyId: string) {
  const params = new URLSearchParams();
  params.set("payload", payload);
  params.set("keyId", keyId);
  window.open(`${DOPPLER_URL}/import?${params.toString()}`, "_blank", "width=800,height=800");
}

interface DopplerImportButtonProps {
  secretName: string;
  secretValue: string;
}

export function DopplerImportButton({ secretName, secretValue }: DopplerImportButtonProps) {
  async function triggerImport() {
    const resolvedKey = await keyInfoPromise;
    const payload = utils.createPayload(secretName, secretValue);
    const encrypted = await encryption.encrypt(payload, resolvedKey);
    const base64URLSafe = utils.buildURLSafeBase64(encrypted);
    openImportTab(base64URLSafe, resolvedKey.keyId);
  }

  return (
    <ReactShadow>
      <ButtonStyles />
      <button className="doppler-btn" type="button" onClick={triggerImport}>
        <Logo />
        <ImportSVG />
      </button>
    </ReactShadow>
  );
}
