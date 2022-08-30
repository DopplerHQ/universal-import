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
  const width = window.innerWidth ?? document.documentElement.clientWidth ?? document.body.clientWidth;
  const height = window.innerHeight ?? document.documentElement.clientHeight ?? document.body.clientHeight;
  const left = (width - windowWidth) / 2;
  const top = (height - windowHeight) / 2;

  // eslint-disable-next-line security/detect-non-literal-fs-filename
  window.open(
    url,
    "_blank",
    `
    width=${windowWidth},
    height=${windowHeight},
    top=${top},
    left=${left}
    `,
  );
}

interface DopplerImportButtonProps {
  secretName: string;
  secretValue: string;
  height?: number;
}

export function DopplerImportButton(props: DopplerImportButtonProps) {
  const { secretName, secretValue } = props;

  async function triggerImport() {
    const resolvedKey = await keyInfoPromise;
    const secrets = [{ name: secretName, value: secretValue }];
    const payload = utils.createPayload(secrets);
    const encrypted = await encryption.encrypt(payload, resolvedKey);
    const base64URLSafe = utils.buildURLSafeBase64(encrypted);
    openImportTab(base64URLSafe, resolvedKey.keyId);
  }

  const height = Math.max(props.height ?? 32, 24);
  const width = height * 2;

  return (
    <ReactShadow>
      <ButtonStyles height={height} width={width} />
      <button className="doppler-btn" type="button" onClick={triggerImport}>
        <div className="doppler-gradient"></div>
        <div className="doppler-gradient-hover"></div>
        <Logo height={height} />
        <ImportSVG height={height} />
      </button>
    </ReactShadow>
  );
}
