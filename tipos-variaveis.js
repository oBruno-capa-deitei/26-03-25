// Verificando tipos de variaveis

let valor = "Hello"; // declaramos a variavel
// tipo da variavel valor, no caso string
console.log(typeof valor); // string

valor = 10;
console.log(typeof valor); // number

// valor lutuane
valor = parseFloat(10.12); // float number
console.log(typeof valor);

// se ela for diferente de 0, mas como não é, ela vai ser verdadeira ou true
valor = valor !=0; // true
// console.log(valor !=0 ? "ok" : "nok"); // ok
console.log(typeof valor);// boolean

valor = BigInt("912193131844714861476588585453614781464612");
console.log(typeof valor); // bigint

let varUndefined;
console.log(typeof varUndefined);

class Objeto {
    constructor(paramOne, paramTwo) {
        this.paramOne = paramOne;
        this.paramTwo = paramTwo;
        console.log(typeof this.paramTwo); // undefined
    }
}

const objeto = new Objeto("Só parâmetro 1");
console.log(typeof objeto); // object class

valor = document.getElementById("elementoInexistente"); // valor = null;
console.log(typeof valor); // undefined null

valo = ["vetor1", "vetor2"];
console.log(typeof valor); // array object

const date = new Date();
console.log(typeof date); // date object

console.log(date); // mostrar tudo sobre a variavel/objeto