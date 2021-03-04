function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function openCookieBanner() {
  if (getCookie("acceptCookies") !== "true") {
    document.getElementById("cookieBanner").classList.add("open");
  }
}

export function acceptCookies() {
  setCookie("acceptCookies", "true", 30);
  document.getElementById("cookieBanner").classList.remove("open");
}

export function revertCookieAcceptance() {
  setCookie("acceptCookies", "", 30);
}
