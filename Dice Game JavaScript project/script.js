const playButton = document.querySelector('.play-btn');
const leftDiceContainer = document.querySelector('.left-dice-container');
const rightDiceContainer = document.querySelector('.right-dice-container');
const h2 = document.querySelector('h2');

playGame();
playButton.addEventListener('click', playGame);
function playGame() {
  const randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  const randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

  if (randomNumber1 > randomNumber2) {
    h2.innerHTML = 'Player1 Wins!';
  } else if (randomNumber2 > randomNumber1) {
    h2.innerHTML = 'Player2 Wins!';
  } else if (randomNumber1 == randomNumber2) {
    h2.innerHTML = 'DRAW!';
  }

  if (randomNumber1 == '1') {
    leftDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/1.png" alt="">
    `;
  } else if (randomNumber1 == '2') {
    leftDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/2.png" alt="">
    `;
  } else if (randomNumber1 == '3') {
    leftDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/3.png" alt="">
    `;
  } else if (randomNumber1 == '4') {
    leftDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/4.png" alt="">
    `;
  } else if (randomNumber1 == '5') {
    leftDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/5.png" alt="">
    `;
  } else if (randomNumber1 == '6') {
    leftDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/6.png" alt="">
    `;
  }

  if (randomNumber2 == '1') {
    rightDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/1.png" alt="">
    `;
  } else if (randomNumber2 == '2') {
    rightDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/2.png" alt="">
    `;
  } else if (randomNumber2 == '3') {
    rightDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/3.png" alt="">
    `;
  } else if (randomNumber2 == '4') {
    rightDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/4.png" alt="">
    `;
  } else if (randomNumber2 == '5') {
    rightDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/5.png" alt="">
    `;
  } else if (randomNumber2 == '6') {
    rightDiceContainer.innerHTML = `
    <img class="new-image" src="/dice images/6.png" alt="">
    `;
  }
}