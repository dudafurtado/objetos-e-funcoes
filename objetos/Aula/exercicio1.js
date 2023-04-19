let duda = {
    nome: "Maria Eduarda",
    idade: 18,
    altura: 1.60,
    temCNH: false,
    apelidos: ["Duda", "Dudinha"]
}

let respostaCNH = ""

if (duda.temCNH === false) {
    respostaCNH += "não possui CNH"
} else {
    respostaCNH += "possui CNH"
}

console.log(`${duda.nome} tem ${duda.idade} anos, ${duda.altura} de altura, ${respostaCNH} e os seguintes apelidos:`)

for (let d of duda.apelidos) {
    console.log(`- ${d}`)
}