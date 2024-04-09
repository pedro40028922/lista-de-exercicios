const prompt = require('prompt-sync')();
    const nome_do_aluno = prompt("nome do aluno")
        const nota1 = Number(prompt("insert the fist note"))
            const nota2 = Number(prompt("insert the second note"))
                const nota3 = Number(prompt("insert the third note"))
                    const nota4 = Number(prompt("insert the fourth note"))
                        const media = (nota1 + nota2 + nota3 + nota4) /4
if(media >= 7) {
    console.log(`Sua nota foi:${media}, congratulation!!!!`)
} else {
    console.log(`Sua nota foi:${media}, REPROVADO!!!!`)
}