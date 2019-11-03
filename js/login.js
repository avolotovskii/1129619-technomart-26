var link = document.querySelector(".about-link-right");
var popup = document.querySelector(".popup-feedback");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("show");
});