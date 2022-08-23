import { utils, encryption } from "@dopplerhq/universal-import-core";
import Logo from "./assets/Logo";
import ImportSVG from "./assets/ImportText";
import ButtonStyles from "./assets/ButtonStyles";
import ReactShadow from "./util/ReactShadow";

const DOPPLER_DASHBOARD_URL = import.meta.env.VITE_DOPPLER_DASHBOARD_URL;

// We'll trigger fetching the key info *outside* of the React component itself so that we:
// 1. Only fetch the key once, regardless of how many times the button will be rendered
// 2. Fetch the key as soon as the button renders to remove delay in the onClick handler
const keyInfoPromise = encryption.fetchKeyInfo();

function openImportTab(payload: string, keyId: string) {
  const params = new URLSearchParams();
  params.set("payload", payload);
  params.set("keyId", keyId);
  openWindow(`${DOPPLER_DASHBOARD_URL}/import?${params.toString()}`, 800, 800);
}

function openWindow(url: string, windowWidth: number, windowHeight: number) {
  // Fixes dual-screen position Most browsers  Firefox
  const dualScreenLeft = window.screenLeft ?? window.screenX;
  const dualScreenTop = window.screenTop ?? window.screenY;

  const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
  const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - windowWidth) / 2 / systemZoom + dualScreenLeft;
  const top = (height - windowHeight) / 2 / systemZoom + dualScreenTop;

  // eslint-disable-next-line security/detect-non-literal-fs-filename
  window.open(
    url,
    "_blank",
    `
    width=${windowWidth / systemZoom},
    height=${windowHeight / systemZoom},
    top=${top},
    left=${left}
    `,
  );
}

interface DopplerImportButtonProps {
  secretName: string;
  secretValue: string;
}

export function DopplerImportButton({ secretName, secretValue }: DopplerImportButtonProps) {
  async function triggerImport() {
    const resolvedKey = await keyInfoPromise;
    const secrets = [{ name: secretName, value: secretValue }];
    const payload = utils.createPayload(secrets);
    const encrypted = await encryption.encrypt(payload, resolvedKey);
    const base64URLSafe = utils.buildURLSafeBase64(encrypted);
    openImportTab(base64URLSafe, resolvedKey.keyId);
  }

  return (
    <ReactShadow>
      <ButtonStyles />
      <button className="doppler-btn" type="button" onClick={triggerImport}>
        <div className="doppler-gradient"></div>
        <div className="doppler-gradient-hover"></div>
        <Logo />
        <ImportSVG className="import-svg" />
      </button>
    </ReactShadow>
  );
}
