const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const overlay = document.getElementById("overlay");

openModalBtn.addEventListener("click", () => {
  overlay.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
