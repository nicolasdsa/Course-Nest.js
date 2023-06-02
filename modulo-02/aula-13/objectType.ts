export { };

const pessoa = {
  nome: 'Nicolas',
  sobrenome: 'Machado',
  idade: 22,
  funcao: 'Back-end Developer'
};

console.log(pessoa);

function onboarding01(funcionario: { nome: string }) {
  return 'Seja bem-vinda ' + funcionario.nome;
}

console.log(onboarding01({ nome: 'Nicolas Machado' }));


interface Pessoa {
  nome: string;
  funcao: string;
}

function onboarding02(pessoa: Pessoa) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.'
  );
}

console.log(onboarding02({ nome: 'Nicolas Machado', funcao: 'Back-end Developer' }));


type Pessoa03 = {
  nome: string;
  funcao: string;
  linguagem: string;
}

function onboarding03(pessoa: Pessoa03) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  );
}

console.log(onboarding03({ nome: 'Nicolas Machado', funcao: 'Back-end Developer', linguagem: 'JavaScript/Typescript' }));


interface Pessoa04 {
  nome: string;
  funcao: string;
  linguagem: string;
  email?: string;
}

function onboarding04(pessoa: Pessoa04) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  );
}

console.log(onboarding04({ nome: 'Nicolas Machado', funcao: 'Back-end Developer', linguagem: 'JavaScript/Typescript' }));


interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string;
}

function onboarding05(pessoa: Pessoa05) {
  return (
    'Seja bem-vinda ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui na empresa será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.' +
    ' Seu e-mail será ' +
    pessoa.email
  );
}

console.log(onboarding05(
  {
    nome: 'Nicolas Machado',
    funcao: 'Back-end Developer',
    linguagem: 'JavaScript/Typescript',
    email: 'nicolas@microsoft.com'
  }
));

interface Mae {
  nome: string;
}

interface Pai {
  sobrenome: string;
}

interface Filha extends Mae, Pai {
  idade: number;
}

const filha: Filha = {
  nome: 'Helena',
  sobrenome: 'Machado',
  idade: 14
}

console.log(filha);

interface Cachorro {
  tipo: string;
}

interface Gato {
  tipo: string;
}

type Animal = Cachorro & Gato;

type Usuario = {
  nome: string;
  email: string;
}

type Admin = {
  nome: string;
  email: string;
  admin: true;
}

const usuario: Usuario = {
  nome: 'Nicolas Machado',
  email: 'nicolas@gmail.com'
}

const admin: Admin = {
  nome: 'Nicolas Machado',
  email: 'nicolas@gmail.com',
  admin: true
}

function acessarSistema<T>(usuario: T): T {
  return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));