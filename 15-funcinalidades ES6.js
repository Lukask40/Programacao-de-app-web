// Novos recursos ES6.

// Vetor de números
const listadeNumeros = [1, 2, 3, 4, 5]

console.log("Exibindo número de vetores")
console.log(listadeNumeros)

console.log("\nMultiplicando números do vetor")
console.log(listadeNumeros)

console.log("n\Multiplicano números do vetor")
const dobrados = listadeNumeros.map(n => n * 2)
console.log(dobrados)

console.log("\nFiltrar números pares do vetor: ")
const pares = listadeNumeros.filter(n => n * 2== 0)
console.log(pares)

console.log("\nSomando todods os números dos vetores: ")
const soma = listadeNumeros.reduce((soma, atual) => soma + atual, 0)
console.log(soma)


 
