export const ADSTERRA_SANDBOX = "allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin";
export const SOCIAL_BAR_URL = "https://bauval.org/14/672fb36d446ac9312b9cab5919848f4d";

export function bannerConfig(viewportWidth: number) {
  return viewportWidth < 400
    ? { key: "79ebcae2d7c54504ff46daa6f586ca08", width: 320, height: 50 }
    : { key: "1852596c667e84526d84e4746f35be9f", width: 300, height: 250 };
}

export function slotDocument(kind: "banner" | "native", viewportWidth: number) {
  const config = bannerConfig(viewportWidth);
  const code = kind === "native"
    ? '<script async data-cfasync="false" src="https://bauval.org/21/295af5bb4bb21bdbb9a3dd1905d16419"></script><div id="container-295af5bb4bb21bdbb9a3dd1905d16419"></div>'
    : `<script>atOptions=${JSON.stringify({ key: config.key, format: "iframe", height: config.height, width: config.width, params: {} })};</script><script src="https://bauval.org/22/${config.key}"></script>`;
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>html,body{margin:0;padding:0;background:transparent}body{text-align:center}iframe{border:0;max-width:100%}#ad{display:flow-root}</style></head><body><div id="ad">${code}</div><script>
  (() => {
    const loaded = new WeakSet();
    const root = document.getElementById('ad');
    const send = () => {
      const frames = [...root.querySelectorAll('iframe')];
      frames.forEach(frame => { if (!frame.dataset.watched) { frame.dataset.watched = '1'; frame.addEventListener('load', () => { loaded.add(frame); send(); }); } });
      const media = [...root.querySelectorAll('img,video,canvas')];
      const filled = frames.some(frame => loaded.has(frame) && frame.getBoundingClientRect().height > 10) || media.some(item => item.getBoundingClientRect().height > 10 && (item.tagName !== 'IMG' || (item.complete && item.naturalWidth > 0))) || [...root.querySelectorAll('a')].some(item => item.innerText.trim().length > 0 && item.getBoundingClientRect().height > 10);
      parent.postMessage({type:'petshop-adsterra-size', filled, height:filled ? Math.min(1600, Math.ceil(root.getBoundingClientRect().height)) : 0}, '*');
    };
    new MutationObserver(send).observe(root, {childList:true,subtree:true,attributes:true});
    new ResizeObserver(send).observe(root);
    root.addEventListener('load', send, true);
    send();
    setTimeout(send, 15000);
  })();
  </script></body></html>`;
}