// Vetores

const listaDeNomes = ["marta", "josé", "Maria"]

console.log("Exibindo todos os elementos")
console.log(listaDeNomes)

console.log("\nExibindo apenas o primeiro elemento: ")
console.log(listaDeNomes[0])

console.log("\nAdicionando um elemento: ")
listaDeNomes.push("Marília")
console.log(listaDeNomes)
    
console.log("\nAdicionando um elemento: ")
listaDeNomes.push("João")
console.log(listaDeNomes)

console.log("\nRemovendo um elemento: ")
// Removendo no índice 1, remover
listaDeNomes.splice(2,1)
console.log(listaDeNomes)

// Removendo segundo eelmento da lista
listaDeNomes.splice(1,1)
console.log()

console.log("\nRemovendo apenas o último elemento: ")
listaDeNomes.pop()
console.log("listaDeNomes")

console.log("\nRemovendo apenas o primeiro elemento: ")
listaDeNomes.shift()
console.log("listaDeNomes")


    
