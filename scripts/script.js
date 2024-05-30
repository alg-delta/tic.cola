// Старт модалка

let openModal = document.querySelectorAll(".banner-btn-explore");

let closeModal = document.querySelector(".close-modal");

let modalWrapper = document.querySelector(".modal-wrapper");



for (item of openModal) {
  item.addEventListener("click", function () {
    modalWrapper.style.display = "flex";
  });
}

closeModal.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});



modalWrapper.addEventListener("click", function (event) {
  if (event.target === modalWrapper) {
    modalWrapper.style.display = "none";
  }
});

window.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    modalWrapper.style.display = "none";
  }
});

// ---------------- THE END МОДАЛКА
