const prompt = require("prompt-sync")();
    let num1 = Number(prompt("digite um numero"))
    let num2 = Number(prompt("digite um numero"))

    let soma = (num1 + num2)
    let mult = (soma + num1)
        console.log(`O resultado da operação é: ${mult}.`)