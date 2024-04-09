 const prompt = require("prompt-sync")();

 let salmensalatual = Number(prompt("valor do salario atual:"))
    let percenlSalario = Number(prompt("valor do percentual:"))
        let novosalario = ( salmensalatual * percentualSalario / 100)
console.log(`o novo salario é: ${novosalario.toFixed(2)}`);

