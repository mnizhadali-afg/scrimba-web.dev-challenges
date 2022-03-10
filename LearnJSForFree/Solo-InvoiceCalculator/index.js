// ----------- buttons ----------- //
const carWash = document.getElementById("car");
const mow = document.getElementById("mow");
const weeds = document.getElementById("weeds");

// ----------- <p class="price"></p> ----------- //
const carText = document.getElementById("car_txt");
const mowText = document.getElementById("mow_txt");
const weedText = document.getElementById("weed_txt");

// ----------- total-amount ----------- //
let totalAmount = document.getElementById("total-amount");
let totalAmountValue = 0;

carWash.addEventListener("click", () => {
  carText.textContent = `$${10}`;
  totalAmountValue += 10;
  totalAmount.textContent = `$${totalAmountValue}`;
});

mow.addEventListener("click", () => {
  mowText.textContent = `$${20}`;
  totalAmountValue += 20;
  totalAmount.textContent = `$${totalAmountValue}`;
});

weeds.addEventListener("click", () => {
  weedText.textContent = `$${30}`;
  totalAmountValue += 30;
  totalAmount.textContent = `$${totalAmountValue}`;
});

console.log(totalAmountValue);
