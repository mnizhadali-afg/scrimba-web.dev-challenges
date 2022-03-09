// 1Meter = 3.28084Feet
// 1Liter = 0.264172Gallons
// 1Kg = 2.2Pounds

function getVal() {
  const value = document.querySelector("input").value;
  return value;
}

const v = getVal();

function lengthConv(v) {
  let m = (v * 0.3048).toFixed(3);
  let f = (v * 3.28084).toFixed(3);

  const lengthPar = document.getElementById("length");
  lengthPar.textContent = `${v} meters = ${f} feet | ${v} feet = ${m} meters`;
}

function volConv(v) {
  let l = (v * 0.264172).toFixed(3);
  let g = (v * 3.78541).toFixed(3);

  const volPar = document.getElementById("volume");
  volPar.textContent = `${v} Liters = ${g} Gallons | ${v} Gallons = ${l} Liters`;
}

function massConv(v) {
  let lb = (v * 2.20462).toFixed(3);
  let kg = (v * 0.453592).toFixed(3);

  const massPar = document.getElementById("mass");
  massPar.textContent = `${v} Kg = ${lb} Pounds | ${v} Pounds = ${kg} Kilograms`;
}

lengthConv(v);
volConv(v);
massConv(v);
