'use strict';

// selecionando elementos
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//Começando as condiçoes
let scores, currentScore, activePlayer, playing;

const initGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
initGame();
// const bodyWin = function () {
//   document.querySelector('body').style.backgroundImage =
//     ' linear-gradient(to top left, rgb(9, 255, 100) 0%, rgb(9, 154, 0) 100%)';
// };
// // const bodyNew = function () {
//   document.querySelector('body').style.backgroundImage =
//     ' linear-gradient(to top left, #753682 0%, #bf2e34 100%);';
// };

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// funcionalidade dos dados rolando
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1 gerar uma rolagem de dado aleatoria
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2 mostrar o dado
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3 checar o dado rolado 1
    if (dice !== 1) {
      // adiciona o numero do dado ao score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1 add current score to active player
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2 check if players score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3 switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', initGame);
// document.querySelector('.dice').style.display = 'none';
