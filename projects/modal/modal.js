const btnOpen = document.querySelector(".btn");
let modal = document.querySelector(".modal-outer");
const btnClose = document.querySelector(".close");

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
modal.addEventListener("click", closeModalOnOutsideClick);

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function closeModalOnOutsideClick(e) {
  if (e.target.matches(".modal-outer")) modal.style.display = "none";
}
