const prompt = require("prompt-sync")();

    let raio = Number(prompt("digite o valor do raio"))
        let altura = Number(prompt("digite a altura do cilindro"))
            let volume = (raio * altura^2 * 3.14)
                console.log(`O volume da caixa d'agua é de ${volume}`)  