let num1: number = 23.0;
let num2: number = 0x78cf;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log("Number = Ponto Flutuante :", num1);
console.log("Number = Hexadecimal :", num2);
console.log("Number = Octal :", num3);
console.log("Number = Binario :", num4);

let big1: bigint = 9007199254740991n;
let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 0o400000000000000003n;

console.log("bigInt = Ponto Flutuante :", big1);
console.log("bigInt = Hexadecimal :", big2);
console.log("bigInt = Octal :", big3);
console.log("bigInt = Binario :", big4);
