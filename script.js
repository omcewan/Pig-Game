'use strict';

// DOM Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRollEl = document.querySelector('.btn--roll');
const btnNewEl = document.querySelector('.btn--new');
const btnHoldEl = document.querySelector('.btn--hold');

// starting conditions
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
newGame();

// helper functions
function switchPlayer() {
  currentScore = 0;
  if (activePlayer === 0) {
    currentScore0El.textContent = currentScore;
    player1El.classList.add('player--active');
    player0El.classList.remove('player--active');
    activePlayer = 1;
  } else {
    currentScore1El.textContent = currentScore;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    activePlayer = 0;
  }
}

// handler functions
function diceRoll() {
  if (scores[0] >= 100 || scores[1] >= 100) {
    return;
  }
  // get a random roll between 1 - 6
  let roll = Math.trunc(Math.random() * 6) + 1;

  // display dice
  // diceEl.setAttribute('src', `dice-${roll}.png`); // another way to set the src for the dice element
  diceEl.src = `dice-${roll}.png`;
  diceEl.classList.remove('hidden');

  if (roll === 1) {
    // change the current player
    switchPlayer();
  } else {
    currentScore += roll;
    activePlayer === 0
      ? (currentScore0El.textContent = currentScore)
      : (currentScore1El.textContent = currentScore);
  }
}

function holdScore() {
  if (scores[0] >= 100 || scores[1] >= 100) {
    return;
  }
  if (activePlayer === 0) {
    scores[0] += currentScore;
    score0El.textContent = scores[0];
    if (scores[0] >= 100) {
      player0El.classList.add('player--winner');
      player0El.classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  } else {
    scores[1] += currentScore;
    score1El.textContent = scores[1];
    if (scores[1] >= 100) {
      player1El.classList.add('player--winner');
      player1El.classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
}

function newGame() {
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  currentScore1El.textContent = 0;
  currentScore0El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  if (player0El.classList.contains('player--winner')) {
    player0El.classList.remove('player--winner');
  }

  if (player1El.classList.contains('player--winner')) {
    player1El.classList.remove('player--winner');
  }
}

// event listerners when clicking game buttons
btnRollEl.addEventListener('click', diceRoll);
btnHoldEl.addEventListener('click', holdScore);
btnNewEl.addEventListener('click', newGame);
