const DOPPLER_DASHBOARD_URL = "REPLACE_POST_COMPILE_DOPPLER_DASHBOARD_URL";

export function open(payload: string, keyId: string) {
  const url = new URL("/import", DOPPLER_DASHBOARD_URL);
  url.searchParams.set("payload", payload);
  url.searchParams.set("keyId", keyId);
  openWindow(url.toString(), 800, 800);
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
