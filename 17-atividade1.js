const listaDeAlunos = [
    {nome: "Ana", nota: 5.0},
    {nome: "Bruno", nota: 10.0},
    {nome: "Carla", nota: 2.0},
    {nome: "Andrea", nota: 7.0},
    {nome: "Marta", nota: 6.0}
]

console.log("Encontrando a aluna Marta e mostrando o nome e a media.")
const alunaMarta = listaDeAlunos.find( aluno => aluno.nome === "Marta" )
console.log(`Nome: ${alunaMarta.nome}, \nNota: ${alunaMarta.nota} pontos.`)

console.log("\nMostrando a media geral da turma.")
const mediaGeral = listaDeAlunos.reduce( (acumulador, aluno) => acumulador + aluno.nota, 0 ) / listaDeAlunos.length
console.log(`A média geral da turma é ${mediaGeral} pontos.`)

console.log("\nMostrando o nome e a media dos alunos abaixo de 7.0.")
const alunosReprovados = listaDeAlunos.filter( aluno => aluno.nota < 7.0 )
alunosReprovados.forEach( aluno =>
    console.log(`Nome: ${aluno.nome}, \nNota: ${aluno.nota} pontos.`)
    )

console.log("\nMostrando o nome e a media dos alunos igual ou  acima de 7.0.")
const alunosAprovados = listaDeAlunos.filter( aluno => aluno.nota >= 7.0 )
alunosAprovados.forEach( aluno =>
    console.log(`Nome: ${aluno.nome}, \nNota: ${aluno.nota} pontos.`)
    )

