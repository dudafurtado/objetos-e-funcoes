const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva (prova) {
    let nota = 0
    let acertos = 0

    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            nota += 2
            acertos++
        }
    } 

    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} e obteve nota ${nota}`)
}

corrigirProva(prova);