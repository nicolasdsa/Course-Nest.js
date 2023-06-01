enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}

console.log(Idioma);

enum Dia {
  Segunda = "SEG",
  Terca = "TER",
  Quarta = "QUA",
  Quinta = "QUI",
  Sexta = "SEX",
  Sabado = "SAB",
  Domingo = "DOM",
}

console.log(Dia);

const enum Comida {
  Hamburger = "Hamburger",
  Massa = "Massa",
  Pizza = "Pizza",
  Torta = "Torta",
  Churrasco = "Churrasco",
}

function comida(c: Comida) {
  return "Comidas muito apetitosas!";
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));

enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: "Parabéns! Tarefa concluída com sucesso!",
};

if (concluidaTarefa.status === Tarefa.Done) {
  console.log("Enviar e-mail: Tarefa Concluída!");
}
