let frutas: string[] = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(frutas[2]);

let frutas1: Array<string> = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(frutas1[3]);

let idiomas: Array<string> = ["português", "inglês", "espanhol", "francês"];
console.log(idiomas);

idiomas.push("mandarim");
console.log(idiomas);

idiomas.push("italiano");
console.log(idiomas);

let idiomas1: Array<string> = ["português", "inglês", "espanhol", "francês"];
console.log(idiomas1.length);

let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);

let linguagensArray: string[] = new Array("javaScript", "python", "PHP", "C#");

function funcaoLinguagens(linguagens: string[]) {
  for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagensArray[i]);
  }
}

funcaoLinguagens(linguagensArray);
