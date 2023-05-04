import { DopplerImport, trigger, fetchKeyInfo, validateSecretName } from "@dopplerhq/universal-import-core";
import Logo from "./assets/Logo";
import ImportSVG from "./assets/ImportText";
import ButtonStyles from "./assets/ButtonStyles";
import ReactShadow from "./util/ReactShadow";
import { useEffect, useRef } from "react";

interface DopplerImportButtonProps extends DopplerImport {
  height?: number;
}

export function DopplerImportButton(props: DopplerImportButtonProps) {
  validateSecretName(props.secretName);

  async function onClick() {
    await trigger(props);
  }

  // Track Viewport
  const reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Start keyInfo fetch when one of the instances of the button
      // is in the user's viewport and then disconnect the observer
      if (entry.isIntersecting) {
        fetchKeyInfo();
        observer.disconnect();
      }
    });
    const button = reference.current;

    if (button === null) {
      return;
    }

    observer.observe(button);
    return () => observer.unobserve(button);
  }, [reference]);

  // Build Button
  const height = Math.max(props.height ?? 32, 24);
  const width = height * 2;

  return (
    <div ref={reference}>
      <ReactShadow>
        <ButtonStyles height={height} width={width} />
        <button className="doppler-btn" type="button" onClick={onClick} title="Import to Doppler">
          <div className="doppler-gradient"></div>
          <div className="doppler-gradient-hover"></div>
          <Logo height={height} />
          <ImportSVG height={height} />
        </button>
      </ReactShadow>
    </div>
  );
}
