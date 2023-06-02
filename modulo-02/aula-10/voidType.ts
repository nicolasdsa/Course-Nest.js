
function logError(errorMessage: string): void {
  console.log(errorMessage);
}

logError('Required field - Name!');


const logErrorExample2 = (errorMessage: string): void => {
  console.log(errorMessage);
};

logErrorExample2('Required field - Surname');


let variavelExemploVoid: void;
//variavelExemploVoid = null;
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);