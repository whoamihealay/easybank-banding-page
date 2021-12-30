// let showDropdown = false;

// function dropdown() {
//   showDropdown = !showDropdown;
//   if (showDropdown === true) {
//     document.getElementById("dropdown").style.opacity = "1";
//     document.getElementById("drop-btn").src = "/images/icon-close.svg";
//   } else {
//     document.getElementById("dropdown").style.opacity = "0";
//     document.getElementById("drop-btn").src = "/images/icon-hamburger.svg";
//   }
// }

document
  .getElementsById(icon)
  .contentDocument()
  .getElementById("iconSVG")
  .setAttribute("fill", "#FFF");

console.log(document.getElementsById(icon));
