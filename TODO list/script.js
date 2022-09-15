'use strict';

const form = document.getElementById('form');
const input = document.getElementById('input');
const listaUl = document.getElementById('lista');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    addLista()
})

function addLista(lista) {
    let listaText = input.value;

    if(lista){
        listaText = lista.text;
    }
    if(listaText){
        const listaEL = document.createElement('li');
        if(lista && lista.completed){
            listaEL.classList.add('completed');
        }
        listaEL.innerText = listaText;
        listaEL.addEventListener('click', () => listaEL.classList.toggle('completed'));
        listaEL.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            listaEL.remove();
        });

        listaUl.appendChild(listaEL);
        input.value = '';

        
}}