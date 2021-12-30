nav = document.getElementById("dropdown");
backdrop = document.getElementById("body");
button = document.getElementById("drop-btn");

function dropdown() {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", "true");
    backdrop.setAttribute("data-visible", "true");
    button.src = "/images/icon-close.svg";
  } else {
    nav.setAttribute("data-visible", "false");
    backdrop.setAttribute("data-visible", "false");
    button.src = "/images/icon-hamburger.svg";
  }
}
