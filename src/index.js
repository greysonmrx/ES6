/* ********** FEATURES DO ES6, ES7 E ES8 ********** */

/* ----------------- Constantes ----------------- */

const x = 10;

x = 20; // Não funciona


/* ------------ Variáveis de escopo ------------ */

function sub(x, y) {
    let val = x - y;

    return val;
}

sub(10, 5); // 5

console.log(val); // Undefined


/* ---------- Concatenação de variáveis ----------*/

// Como era feito antes:
var animal = "Gorila";
var habitat = "Floresta";

var frase = "Meu nome é " + animal + " e eu moro no(a) " + habitat;

// Como é feito agora:
var animal = "Gorila";
var habitat = "Floresta";

var frase = `Meu nome é ${animal} e eu moro no(a) ${habitat}`;


/* -------------- Arrow Functions -------------- */

// Função com 1 parâmtro:
func = nome => {
    const frase = `Nome: ${nome}`;

    return frase;
}

// Função com mais de um parâmetro:
func = (nome, idade) => {
    const frase = `Nome: ${nome}, Idade: ${idade}`;

    return frase;
}

// Função com uma instrução:
func = (x, y) => x + y;

// Função com o parâmetro desestruturado:
func = ({ val, index }) => `Valor: ${val}, Index: ${index}`;


/* -------------- Desestruturação -------------- */
const details = {
    name: "Greyson",
    age: 18,
    city: "Palmeira dos Índios",
    company: {
        name: "Flame Studio",
        email: "oi@flamestudio.com.br"
    }
}

// Como era feito antes:
const name = details.name; // Greyson
const age = details.age // 18
const city = details.city; // Palmeira dos Índios
const nameCompany = details.company.name; // Flame Studio
const emailCompany = details.company.email; // oi@flamestudio.com.br

// Como é feito agora:
const { name, age, city, company: { name: nameCompany, email: emailCompany } } = details;


/* -------------- Sintaxe curta de objetos -------------- */

const nome = "Greyson";

const user = {
  nome // Mesma coisa que nome: nome
};

console.log(user.nome); // Greyson


/* -------------- Async/await -------------- */

// Como era feito antes:
function request() {
    Api.get('http://api.com')
    .then(response => response)
    .catch(err => err);
}

// Como é feito agora:
async function request() {
    try {
        return await Api.get('http://api.com');
    } catch(err) {
        return err;
    }
}

/* -------------- Definindo valores padrão para parâmetros -------------- */

// Como era feito antes:
function soma(x, y) {
    var x = x || 10;
    var y = y || 20;

    return x + y;
}

console.log(funcao()); // 30

// Como é feito agora:
function soma(x = 10, y = 20) {
    return x + y;
}

console.log(funcao()); // 30


/* ************************************************ */
