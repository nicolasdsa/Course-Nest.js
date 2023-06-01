let pessoa: [string, string, number];
pessoa = ["Nicolas", "Back-end Developer", 22];

console.log(pessoa);

let pessoa1: [string, string, number];
pessoa1 = ["Nicolas", "Back-end Developer", 22];

console.log(pessoa1[1]);

let pessoa2: [nome: string, posicao: string, idade: number] = [
  "Nicolas",
  "Back-end Developer",
  22,
];

console.log(pessoa2);

let listaFrutas: [string, ...string[]] = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(...listaFrutas);

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

function listarPessoas(nomes: string[], idades: number[]) {
  return [...nomes, ...idades];
}

let resultado = listarPessoas(["Nicolas", "Madu"], [22, 20]);
console.log(resultado);

type Nome =
  | [primeiroNome: string, sobrenome: string]
  | [primeiroNome: string, nomeMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome) {
  return [...nome];
}

console.log(criarPessoa("Nicolas", "Machado"));
