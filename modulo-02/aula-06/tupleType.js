"use strict";
let pessoa;
pessoa = ["Nicolas", "Back-end Developer", 22];
console.log(pessoa);
let pessoa1;
pessoa1 = ["Nicolas", "Back-end Developer", 22];
console.log(pessoa1[1]);
let pessoa2 = [
    "Nicolas",
    "Back-end Developer",
    22,
];
console.log(pessoa2);
let listaFrutas = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(...listaFrutas);
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(["Nicolas", "Madu"], [22, 20]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa("Nicolas", "Machado"));
