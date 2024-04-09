const prompt = require("prompt-sync")();

let custoCarro = Number(prompt("custo do carro: "))
    let porcenDIstribuidor = Number(prompt("percentual do distribuidor: "))
        let imposto = Number(prompt("quanto a pagar de imposto: "));
            let custoimposto = custoCarro * imposto
                let custoDistribuidor = custoCarro * porcenDIstribuidor
                    let custofinal = custoCarro + custoDistribuidor + custoimposto
console.log(`o valor final para o cliente: ${custofinal.toFixed(2)}`);