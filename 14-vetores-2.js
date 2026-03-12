// Exercicios

// Crie um vetor com o nome de seus familiares.
// Com 6 nomes

// Use todods os comandos vistos em vetores após criar a lista

const listaDeFamiliares = ["Victor", "Thalysson", "Henrique", "Jacy","Irailson ", "joão" ]

console.log("\nExibindo todos os elementos")
console.log(listaDeFamiliares)

console.log("\nExibindo apenas o primeiro elemento")
console.log(listaDeFamiliares[0])

console.log("\nAdicionando um elemento: ")
listaDeFamiliares.push("toby")
console.log("listaDeFamiliares")

console.log("\nRemovendo um elemento:  ")
listaDeFamiliares.splice(2, 1)
console.log("listaDeFamiliares")

// Removendo segundo eelmento da lista
listaDeFamiliares.splice(1,1)
console.log(listaDeFamiliares)

console.log("\nRemovendo apenas o último elemento: ")
listaDeFamiliares.pop(6,1)
console.log(listaDeFamiliares)

console.log("\nRemovendo apenas o primeiro elemento: ")
listaDeFamiliares.shift(0,1)
console.log(listaDeFamiliares)

