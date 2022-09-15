'use strict';

const submit = document.querySelector('#submit');
const input = document.querySelectorAll('input');
const formEnviado = document.querySelector('#dados');
const form = document.querySelector('.form');
const btn = document.querySelector('.btn');

var texto = `Obrigado por se cadastrar!`;
var nome = input[0].value;
var div = document.createElement('div');

form.style.display = 'none';

btn.addEventListener('click', function(e) {
  e.preventDefault();
  form.style.display = 'block';
  btn.style.display = 'none';
  newBtn.style.display = 'block';
});

submit.addEventListener('click', function(e) {
  e.preventDefault();
  let name = input[0].value;
  let email = input[1].value;
  let phone = input[2].value;
  let adress = input[3].value;
  let city = input[4].value;
  let state = input[5].value;
  
  if (name === '' || email === '' || phone === '' || adress === '' || city === '' || state === '') {
    alert('Preencha todos os campos');
  } else {
    let name = input[0].value;
    formEnviado.appendChild(div).innerHTML = `<p>${texto} ${name}</p>`;
    form.style.display = 'none';
    btn.style.display = 'none';
    cleanForm();
  }
  
});
function cleanForm() {
  input.forEach(function(item) {
    item.value = '';
  });
};

div.style.height = "100%";
div.style.background = "rgb(75, 80, 153)";
div.style.color = "white";
div.style.textAlign = "center";
div.style.padding = "20px";
div.style.width = "100%";
div.style.borderRadius = "10px";
div.innerHTML = texto + `<br>` + `Seu nome é: ` + nome;






// function how to parameters are passed to functions
// function numOne(numOne){
  //     numOne = 10;
  //     return numOne;
  // }
  
  // function numTwo(numTwo){
    //     numTwo = 10;
    //     return numTwo;
    // }
    // function numThree(numThree){
      //     numThree = 2;
      //     return numThree;
      // }
      
      // function media() {
        //   return (numOne() + numTwo()) / numThree();
        // }
        // console.log(media());
        // console.log(typeof numTwo());
        // console.log(typeof numOne());
        // console.log(typeof media());
        
        // function numFour() {
          //     return numOne() + numTwo();
          // }
          
          // console.log(numFour());
          
          
          //forEach, index, array

// const numbers = [355, -700, 989, 899, -9, 15, 668];

// numbers.forEach(function(num, index) {
//   if (num > 0) {
//     console.log(`Moviment ${index + 1}: your deposit is ${num}`);
//   }else {
//     console.log(`Moviment ${index + 1}: Você sacou ${Math.abs(num)} dolares da sua conta`);
//   }
// });