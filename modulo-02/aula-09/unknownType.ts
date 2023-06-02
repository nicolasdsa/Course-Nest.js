let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! Tudo bem?';

console.log(valorVariavel);

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

//console.log(algumaCoisaAny.toFixed());

if (typeof algumaCoisaUnknown === 'number') {
  console.log(algumaCoisaUnknown.toFixed());
}
