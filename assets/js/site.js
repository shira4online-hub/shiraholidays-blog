/* ===== Google Analytics (loads only after cookie consent) ===== */
const GA_ID = 'G-XXXXXXXXXX'; // <-- החליפי עם ה-ID האמיתי שלך מ-Google Analytics

function loadGA() {
  if (document.getElementById('ga-script')) return;
  const s = document.createElement('script');
  s.id = 'ga-script';
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
}

/* ===== Cookie Consent Banner ===== */
(function () {
  const COOKIE_KEY = 'sh_cookie_consent';

  function setCookie(val) {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    document.cookie = COOKIE_KEY + '=' + val + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
  }

  function getCookie() {
    return document.cookie.split(';').some(c => c.trim().startsWith(COOKIE_KEY + '='));
  }

  function hasConsented() {
    return document.cookie.split(';').some(c => c.trim() === COOKIE_KEY + '=true');
  }

  // If already consented — load GA silently
  if (hasConsented()) {
    loadGA();
    return;
  }

  // If already dismissed (false) — don't show banner again
  if (getCookie()) return;

  // Show banner
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div style="
      position:fixed;bottom:0;left:0;right:0;z-index:9999;
      background:#1A1A2E;color:rgba(255,255,255,0.85);
      padding:14px 20px;
      display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;
      font-family:'Heebo',sans-serif;font-size:13px;font-weight:300;
      direction:rtl;
      box-shadow:0 -4px 24px rgba(0,0,0,0.15);
    ">
      <span>
        אנחנו משתמשים בעוגיות לשיפור החוויה ולניתוח תנועה.
        <a href="/privacy.html" style="color:#E8603A;text-decoration:underline;margin-right:4px;">קראו עוד</a>
      </span>
      <div style="display:flex;gap:10px;flex-shrink:0;">
        <button id="cookie-decline" style="
          padding:7px 16px;border-radius:8px;border:1px solid rgba(255,255,255,0.25);
          background:transparent;color:rgba(255,255,255,0.6);cursor:pointer;
          font-family:'Heebo',sans-serif;font-size:13px;
        ">דחייה</button>
        <button id="cookie-accept" style="
          padding:7px 18px;border-radius:8px;border:none;
          background:#E8603A;color:white;cursor:pointer;font-weight:600;
          font-family:'Heebo',sans-serif;font-size:13px;
        ">אישור</button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById('cookie-accept').addEventListener('click', function () {
    setCookie('true');
    banner.remove();
    loadGA();
  });

  document.getElementById('cookie-decline').addEventListener('click', function () {
    setCookie('false');
    banner.remove();
  });
})();
