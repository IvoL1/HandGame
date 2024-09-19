const options = document.querySelectorAll(".choices picture img");
const message = document.querySelector(".message");
const player = document.querySelector(".player");
const ia = document.querySelector(".ia");

const ps = document.querySelector(".playerS");
const iaS = document.querySelector(".iaS");
let countP = 0;
let countI = 0;

options.forEach((op) => {
  op.addEventListener("click", handleStart);
});

function handleStart(e) {
  const img = document.createElement("img");
  const playerChoice = e.target.alt;
  player.innerHTML = "";
  img.src = `assets/images/${playerChoice}.png`;
  player.appendChild(img);
  const iaChoice = handleIntelligence();
  handleResult(playerChoice, iaChoice);
  ps.innerHTML = countP;
  iaS.innerHTML = countI;
}

function handleResult(playerChoice, iaChoice) {
  const span = document.createElement("span");
  const img = document.createElement("img");

  if (playerChoice == iaChoice) {
    // TIE
    message.innerHTML = "";
    span.textContent = "Tie!";
    message.appendChild(span);
  } else if (
    (playerChoice === "paper" && iaChoice === "rock") ||
    (playerChoice === "rock" && iaChoice === "scissors") ||
    (playerChoice === "scissors" && iaChoice === "paper")
  ) {
    // WIN
    message.innerHTML = "";
    span.textContent = "You Win!";
    img.src = "assets/images/trophy.svg";
    img.classList.add("win");
    message.append(span);
    message.appendChild(img);
    countP++;
  } else {
    // LOSE
    message.innerHTML = "";
    span.textContent = "You Lose!";
    img.src = "assets/images/circle-x.svg";
    img.classList.add("loser");
    message.append(span);
    message.appendChild(img);
    countI++;
  }
}

function handleIntelligence() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choices = ["paper", "rock", "scissors"];
  const img = document.createElement("img");
  ia.innerHTML = "";
  img.src = `assets/images/${choices[randomNumber]}.png`;
  ia.appendChild(img);
  return choices[randomNumber];
}
