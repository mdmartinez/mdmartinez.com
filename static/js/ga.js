(function(a, s, y, n, c, h, i, d, e) {
  s.className += ' ' + y;
  h.start = 1 * new Date();
  h.end = i = function() {
    s.className = s.className.replace(RegExp(' ?' + y), '');
  };
  (a[n] = a[n] || []).hide = h;
  setTimeout(function() {
    i();
    h.end = null;
  }, c);
  h.timeout = c;
})(window, document.documentElement, 'async-hide', 'dataLayer', 4000, { 'GTM-MR5DMHT': true });

function gaOptout() {
  (document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/'),
    (window[disableStr] = !0);
}
var gaProperty = 'UA-68492200-1',
  disableStr = 'ga-disable-' + gaProperty;
document.cookie.indexOf(disableStr + '=true') > -1 && (window[disableStr] = !0);
if (!(navigator.doNotTrack == '1' || window.doNotTrack == '1')) {
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    (i[r] =
      i[r] ||
      function() {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
}
if (typeof ga === 'function') {
  ga('create', 'UA-68492200-1', 'auto');
  ga('require', 'GTM-MR5DMHT');
  ga('set', 'anonymizeIp', 1);
}
