// variaveis

// var = variavel, quando vc declara ela fora de uma função, ela se torna uma variavel de ambiente, onde vc pode alterar o valor dela, mas não o nome
var nomeDaVariavel = "Valor da Variavel"; // 

let nomeDaVariavelTemporaria = "Valor Temporario da Variavel"; //let, que qunando vc declara fora de uma função, vc executa o codigo ele ja sai da memoria, ela serve aé o final do script

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Variavel"; // não consegue alterar o valor dela, o valor dela é somente leitura

//console.log = aparece no console (F12)
console.log("nomeDaVariavel:", nomeDaVariavel);

console.log("nomeDaVariavelTemporaria", nomeDaVariavelTemporaria);

console.log("nomeDaVariavelSomenteLeitura:", nomeDaVariavelSomenteLeitura);

var matriz = ["vetor1", "vetor2", "vetor3", "vetor4", "vetor5"];

//console.log("matriz, vetor1:", matriz[0]); // toda matriz vai começar com vetor1 = 0

// "for" precisa ter um inicio meio e fim, "let" é o começo
for (let i = 0; i < matriz.length; i++) { // i = chave que vai ser utilizada em cada matriz
    console.log("matriz[" + i + "]", matriz[i]);
}

class NomeDoObjeto {
    constructor (parametroUm, parametroDois) {
        ///this.parametroUm = "Valor Um";
        //this.parametroDois = "Valor Dois";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;
    }

    metedoMostrarParametros(parametroUm, parametroDois) {
        //this.parametroUm = "Valor 1";
        //this.parametroDois = "Valor 2";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;
        return this.parametroUm + " - " + this.parametroDois;
    }
}

const novoObjeto = new NomeDoObjeto();
console.log(novoObjeto.metedoMostrarParametros("um", "dois"));

class BolaDePlastico {
    constructor(textura, tamanho, cor, peso, volume, densidade, massa,){
    this.textura = textura;
    this.cor = tamanho;
    this.tamanho = cor;
    this.peso = peso;
    this.volume = volume;
    this.densidade = densidade;
    this.massa = massa;
    }

   
    metodoBolaDePlastico(textura, tamanho, cor, peso, volume, densidade, massa){
        this.textura = textura;
        this.cor = tamanho;
        this.tamanho = cor;
        this.peso = peso;
        this.volume = volume;
        this.densidade = densidade;
        this.massa = massa;
        console.log(this);
        return this.textura + " - " +
        this.textura +
        " - " +
        this.tamanho +
        " - " +
        this.cor + 
        " - " +
        this.peso +
        " - " +
        this.volume +
        " - " +
        this.densidade +
        " - " +
        this.massa;

    }
}
const bolaDePlasticoObjeto = new BolaDePlastico();
console.log("bolaDePlastico: ", bolaDePlasticoObjeto.metodoBolaDePlastico("textura", "tamanho", "cor", "peso", "volume", "densidade", "massa"));




