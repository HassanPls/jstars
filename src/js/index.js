/* Button to top of the page */

var ButtonTop = document.getElementById("Top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    ButtonTop.style.display = "block";
  } else {
    ButtonTop.style.display = "none";
  }
}
