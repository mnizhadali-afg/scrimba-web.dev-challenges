/* -------------------- Increment Button Clicked--------------------*/
let count = 0;
const incBtn = document.getElementById("increment-btn");

incBtn.addEventListener("click", () => {
  count++;
  document.getElementById("count-el").innerText = count;
});

/* -------------------- Save Button Clicked--------------------*/
const saveBtn = document.getElementById("save-btn");
const pText = document.getElementById("save-el");

saveBtn.addEventListener("click", () => {
  if (count > 0) {
    pText.innerText += ` ${count} - `;
    count = 0;
  } else {
    alert("No passenger passed.");
  }
});
