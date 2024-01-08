"use strict";
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
var score0E1 = document.querySelector("#score--0"); // score 0
var score0E2 = document.querySelector("#score--1"); // score 1
var current0El = document.querySelector("#current--0"); // current score nechay wala plyer 0
let current1E1 = document.querySelector("#current--1"); //current score nechay wala plyer 1

var diceEl = document.querySelector(".dice");

var btnRoll = document.querySelector(".btn--roll"); //roll button
var btnHold = document.querySelector(".btn--hold"); //hold button
var btnNew = document.querySelector(".btn--new"); //newGame button

score0E1.textContent = 0;
diceEl.textContent = 0;
diceEl.classList.add("hidden");

let playing = true;
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", function () {
  if (playing) {
    //jb play hoga to ye kaam hoga
    let dice = Math.trunc(Math.random() * 6) + 1; //dice random number

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      // current0El.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;

      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
    }
  }
});

btnHold.addEventListener("click", function () {
  //hold event m value oper put krwana
  if (playing) {
    // jb play hoga to ye kaam hoga
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false; // jb play finish hoga tb ye kaam hoga
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;

      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
    }
  }
});

btnNew.addEventListener("click", function () {
  score0E1.textContent = 0;
  score0E2.textContent = 0;
  current0El.textContent = 0;
  current1E1.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  // player1El.classList.add("player--active");
});
