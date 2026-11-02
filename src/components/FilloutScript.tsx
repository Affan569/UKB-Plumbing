import Script from 'next/script';
export default function FilloutScript() {
  return (
    <>
      <Script
        src="https://server.fillout.com/embed/v1/"
        strategy="afterInteractive"
      />
      {/* ADDED: Fires Google Ads conversion once after Fillout confirms a successful submission */}
      <Script
        id="fillout-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  if (window.__filloutAdsBound) return;              // ek page par sirf ek dafa bind ho
  window.__filloutAdsBound = true;

  var SEND_TO = 'AW-16916032947/kU9LCO_wlaAbELPbmII_';
  var DEBUG = true;                                   // CHANGED: test ke liye true, test ke baad false kar den
  var fired = {};                                     // har submission sirf ek dafa count ho

  if (DEBUG) console.log('[Fillout ads] listener ready');   // ADDED

  window.addEventListener('message', function (e) {
    // sirf Fillout ke origin se
    try {
      if (!new URL(e.origin).hostname.endsWith('fillout.com')) return;
    } catch (err) { return; }

    // sirf asal submit message (Fillout ka type: 'form_submit')
    var d = e.data;
    if (!d || typeof d !== 'object' || d.type !== 'form_submit') return;

    if (DEBUG) console.log('[Fillout ads] form_submit received', d.submissionUuid);   // ADDED

    // REMOVED: "is page ke kisi iframe se aaya ho" wali check (nested iframe mein fail ho sakti thi)

    // duplicate rokna: ek submissionUuid = ek conversion
    var key = d.submissionUuid || d.embedId || 'single';
    if (fired[key]) {
      if (DEBUG) console.log('[Fillout ads] duplicate skipped');   // ADDED
      return;
    }
    fired[key] = true;

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: SEND_TO });
      if (DEBUG) console.log('[Fillout ads] conversion sent');     // ADDED
    } else if (DEBUG) {
      console.warn('[Fillout ads] gtag not loaded');                // CHANGED: message
    }
  });
})();
`,
        }}
      />
    </>
  );
}