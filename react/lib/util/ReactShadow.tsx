import { useRef, useState, useEffect, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export default function ReactShadow(props: PropsWithChildren<any>) {
  const ref = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot>();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    try {
      if (ref.current.shadowRoot) {
        return;
      }
      const sr = ref.current.attachShadow({ mode: "open" });
      setShadowRoot(sr);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <div ref={ref}>{shadowRoot ? createPortal(props.children, shadowRoot) : null}</div>;
}
