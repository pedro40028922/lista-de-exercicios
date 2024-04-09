const prompt = require("prompt-sync")();

let numCarrosVend = Number(prompt("Quantos carros foi vendido: "))
    let vendTotal = Number(prompt("Total das vendas: "))
        let salfixo = Number(prompt("Salario do vendedor: "))
            let valorporcarro = Number(prompt("Valor por carro vendido: "))
                let comissão = 0.5 * salfixo
                    
                let salariofinal = salfixo + comissão + valorporcarro + numCarrosVend
                console.log(`Este é o salario final do vendedor: ${salariofinal}`);