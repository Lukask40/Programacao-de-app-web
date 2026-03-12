
// Exemplo com vetor de nomes
const listaDeNomes = ["Ana", "Maria", "Joana"]

// Exemplo com vetor de números
const listaDeNumeros = [1, 2, 3, 4, 5]

// Vetor de objetos com dados de nome e idade.
// Um objeto carrega dados como uma classe.
const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "José", idade: 15}

]

// Percorrendo e exibindo os elementos do vetor.
// ForEach é uma função com laço de repetição.
console.log("Exibindo todos os usuários do vetor.")
listaDeUsuarios.forEach( usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
    console.log("Senai")
})

// Como os antigos.
console.log("\nExibindo todos os usuários do vetor.")
for (let i = 0; i < listaDeUsuarios.length; i++) {
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioriade = listaDeUsuarios.filter( usuario => usuario.idade >= 18 )
// Use as {} caso precise de mais de uma linha.
maioriade.forEach( usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
    )

console.log("\nFiltrando menores de 18 anos.")
const menoridade = listaDeUsuarios.filter( usuario => usuario.idade < 18 )
menoridade.forEach( usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
    )

console.log("\nFiltrando os numeros pares.")
const numerosPares = listaDeNumeros.filter( numero => numero % 2 === 0 )
numerosPares.forEach( numero =>
    console.log(`${numero} é par.`)
    )

console.log("\nMostrando o nome de cada usuário.")
const nomes = listaDeUsuarios.map( usuario => usuario.nome )
nomes.forEach( nome =>
    console.log(nome)
    )

console.log("\nEncontrando um usuario.")
const usuarioEncontrado = listaDeUsuarios.find( usuario => usuario.nome === "Ana" )
// console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome}, \nIdade: ${usuarioEncontrado.idade} anos.`)

console.log("\nEncontrando um usuario de 45 anos.")
const usuario45 = listaDeUsuarios.find( usuario => usuario.idade === 45 )
console.log(usuario45)
console.log(`Nome: ${usuario45.nome}, \nIdade: ${usuario45.idade} anos.`)

console.log("\nNa lista de usuarios, somando todas as idades.")
const somaDasIdades = listaDeUsuarios.reduce( (total, usuario) => total + usuario.idade, 0 )
console.log(somaDasIdades)



