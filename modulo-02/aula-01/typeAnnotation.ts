// Variáveis
let nome: string = "Nicolas";
console.log(nome);

// Arrays
let animais: string[] = ["Elefante", "Cachorro", "Gato"];
console.log(animais);

// Objetos
let carro: {
  nome: string;
  ano: number;
  preco: number;
};

carro = { nome: "Toyota Yaris Sedan XS", ano: 2019, preco: 80000 };
console.log(carro);

// Functions
function multiplicarNumero(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplicarNumero(2, 5));
