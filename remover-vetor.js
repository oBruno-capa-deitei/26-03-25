var matrizDeFrutas = ["Banana", "Maça", "Mamão"];
matrizDeFrutas.push("Abacate");
console.log(matrizDeFrutas.toString());// nesse console ele mostra a mça

// Removendo vetores de uma matriz:

var indexdorDoVetor = matrizDeFrutas.index0f("Maça"); // Aqui é feita uma busca pelo texto "Maça" e, se encontrado o texto,
// retorna o número do vetor na matriz, iniciando por 0

matrizDeFrutas.splice(indexdorDoVetor, 1); // aqui é retirado o vetor, ora antes encontrado na váriavel indexadorDoVetor, sendo o número 1 a indicação da quantidade
// de vetores; este mesmo método também é utilizado para substituir vetores em uma matriz

console.log(matrizDeFrutas.toString()) 
