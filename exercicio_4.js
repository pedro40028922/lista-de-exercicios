const prompt = require("prompt-sync")();

let custoCarro = Number(prompt("valor do carro: "))
    let percDistribuidor = 0.28
        let impostos = 0.45
            let custoDistribuidor = custoCarro * percDistribuidor
                let custoimpostos = custoCarro * impostos
                    let valorfinal = custoCarro + custoDistribuidor + custoimpostos
console.log(`O custo final para o cliente será de: ${valorfinal}`);