var link = document.querySelector(".about-link-right");
var popup = document.querySelector(".popup-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var nameq = popup.querySelector("[name=name]");
var mail = popup.querySelector ("[name=email]");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("nameq");
} catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("show");
  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
  nameq.focus();
  }
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  if (!nameq.value || !mail.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameq", nameq.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("show")) {
      popup.classList.remove("show");
      popup.classList.remove("modal-error");
    }
  }
})