const scriptEl = document.currentScript;
const gaId = scriptEl?.dataset?.gaId;

if (gaId) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", gaId, { anonymize_ip: true });
}
