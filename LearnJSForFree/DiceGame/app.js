let playerScores = {
  player1: 0,
  player2: 0,
};

let player1Turn = true;

let player1Dice = document.getElementById("player1Dice");
let player2Dice = document.getElementById("player2Dice");
let player1Scoreboard = document.getElementById("player1Scoreboard");
let player2Scoreboard = document.getElementById("player2Scoreboard");
let message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
  message.textContent = "Player 1 Turn";
  playerScores.player1 = 0;
  playerScores.player2 = 0;
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
});

rollBtn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 6 + 1);

  if (player1Turn) {
    playerScores.player1 += randomNumber;
    player1Scoreboard.textContent = playerScores.player1;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 turn";
  } else {
    playerScores.player2 += randomNumber;
    player2Scoreboard.textContent = playerScores.player2;
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 turn";
  }
  player1Turn = !player1Turn;

  if (playerScores.player1 >= 20) {
    message.textContent = "🎉 Winner: Player 1 🎉";
    changeStyle();
  } else if (playerScores.player2 >= 20) {
    message.textContent = "🎉 Winner: Player 2 🎉";
    changeStyle();
  }
});

function changeStyle() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
  return true;
}
