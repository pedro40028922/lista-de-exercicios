const prompt = require("prompt-sync")();
    let notaA1 = Number(prompt("nota do aluno:"))
        let notaA2 = Number(prompt("digite a nota "))
            let peso1 = 4
                let peso2 = 6

let media = (notaA1 *  peso1 + notaA2 * peso2) /2

if (media <= 50) {
    console.log(`A nota deste aluno foi: ${media}, Aprovado!!!`)
} else (`A nota deste aluno foi: ${media}, REPROVADO!!!`)

