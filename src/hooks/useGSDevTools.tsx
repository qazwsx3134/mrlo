import { $ } from "@builder.io/qwik";

const GSDevTools = $(async () => {
  function loadScript() {
    return new Promise<(opts: any) => void>((resolve, reject) => {
      if ((globalThis as any).confetti) {
        return resolve((globalThis as any).confetti as any);
      }
      const script = document.createElement("script");
      script.src =
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/GSDevTools3.min.js";
      script.onload = () => resolve((globalThis as any).confetti as any);
      script.onerror = reject;
      document.head.appendChild(script);
      script.remove();
    });
  }

  await loadScript();
});

export default GSDevTools;
