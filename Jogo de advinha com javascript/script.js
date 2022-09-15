'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Start guessing...';
// emoji botão windows + botão .(ponto)

document.querySelector('.number').textContent = 16;
document.querySelector('.score').textContent = 5;

document.querySelector('.guess').value = 19;

console.log(document.querySelector('.guess').value);
*/

// document.querySelector('.again').addEventListener('click', function() {
//   document.location.reload(true);
// })
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // quando nao se coloca nenhum numero, assim como o jogador digita 0;
  if (!guess) {
    // document.querySelector('.message').textContent = '😒 No number!';
    displayMessage('😒 No number!');

    // quando o jogador ganha
  } else if (guess === secretNumber) {
    displayMessage('Parabéns! ✌️🤩');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // quando o jogador digita um numero acima do permitido.
  } else if (guess > 20) {
    displayMessage('Saiu do planeta 🤦‍♂️ entre 1 e 20');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Passou demais 😉' : 'Muito baixo 🤣');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Você perdeu! 😭');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Tente novamente...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
