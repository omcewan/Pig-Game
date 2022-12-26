'use strict';

// DOM Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRollEl = document.querySelector('.btn--roll');
const btnNewEl = document.querySelector('.btn--new');
const btnHoldEl = document.querySelector('.btn--hold');

// starting conditions
let scorePlayer0 = 0;
let scorePlayer1 = 0;
let currentScore = 0;
score0El.textContent = scorePlayer0;
score1El.textContent = scorePlayer1;
currentScore1El.textContent = 0;
currentScore0El.textContent = 0;
diceEl.classList.add('hidden');

btnRollEl.addEventListener('click', function () {
  // get a random roll between 1 - 6
  let roll = Math.trunc(Math.random() * 6) + 1;

  // display dice
  // diceEl.setAttribute('src', `dice-${roll}.png`); another way to set the src for the dice element
  diceEl.src = `dice-${roll}.png`;
  diceEl.classList.remove('hidden');

  if (roll === 1) {
    currentScore = 0;
    currentScore0El.textContent = currentScore;
    // change the current player
  } else {
    currentScore += roll;
    currentScore0El.textContent = currentScore;
  }
});
