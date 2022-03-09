let firstCard;
let secondCard;
let sum;

let hasBlackJack = false;
let isAlive = true;
let msg = "";

let resPar = document.getElementById("result");
let btn = document.getElementById("button-start");
let cardsPar = document.getElementById("cards");
let sumPar = document.getElementById("sum");

btn.addEventListener("click", startGame);

function getRandomNumber() {
  return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
  firstCard = getRandomNumber();
  secondCard = getRandomNumber();
  sum = firstCard + secondCard;
  cardsPar.textContent = `Cards: ${firstCard} - ${secondCard}`;
  sumPar.textContent = `Sum: ${sum}`;

  if (sum < 21) {
    msg = "Do you want to draw a new card? 🙂";
    resPar.textContent = msg;
  } else if (sum === 21) {
    msg = "Wohoo! You've got Blackjack! 🤑";
    resPar.textContent = msg;
  } else {
    msg = "You're out of the game! 😭";
    resPar.textContent = msg;
    isAlive = false;
  }
}
