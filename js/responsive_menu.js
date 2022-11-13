function mobileMenu() {
  var x = document.getElementById("respNavbar");
  if (x.className === "navbar") {
    x.className = " responsive";
  } else {
    x.className = "navbar";
  }
}