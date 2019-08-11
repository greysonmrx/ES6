/* Definindo valores padrão para parâmetros */

// Como era feito antes:
var funcao = function(x, y) {
    var x = x || 10;
    var y = y || 20;

    return x + y;
}

console.log(funcao());

// Como é feito agora:

var funcao = function(x = 10, y = 20) {
    return x + y;
}

console.log(funcao());

/* Concatenação de variáveis */

// Como era feito antes:
var nome = "Greyson";
var idade = 18;

var frase = "Meu nome é " + nome + ". Tenho " + idade + " anos :)";

console.log(frase);

//Como é feito agora
var nome = "Greyson";
var idade = 18;

var frase = `Meu nome é ${nome}. Tenho ${idade} anos :)`;

console.log(frase);

/* Desestruturação */

// Como era feito antes:
var data = require('./data.js');
var details = data.details;

var name = details.name;
var age = details.age;
var city = details.city;

console.log(`Nome: ${name}, Idade: ${age}, Cidade: ${city}`);

// Como é feito atualmente:
var { details: { name, age, city } } = require('./data.js');

console.log(`Nome: ${name}, Idade: ${age}, Cidade: ${city}`);

















const products = require('./data');

const x = 2;
const y = 5;

soma = (x, y) => x + y;

subtracao = (x, y) => x - y;

divisao = (x, y) => x / y;

multiplicacao = (x, y) => x * y;

console.log(`
    Soma: ${soma(x, y)}
    Subtração: ${subtracao(x, y)}
    Divisão: ${divisao(x, y)}
    Multiplicação: ${multiplicacao(x, y)}
`);