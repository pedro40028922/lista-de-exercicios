  const prompt = require("prompt-sync")();
    function eleições() {
        const totaleleitores = Number(prompt("insira a quantidade de eleitores"))
        const Vbrancos = Number(prompt("insira os votos em brancos"))
            const Vnulos = Number(prompt("insira os votos nulos"))
                const Vvalidos = Number(prompt("insira os votos validos"))

    let quantbrancos = (Vbrancos / totaleleitores)* 100
        let quantVnulos = (Vnulos / totaleleitores)* 100
            let quantValidos = ( Vvalidos / totaleleitores)*100
                console.log(`quantidades de votos em brancos${quantbrancos.toFixed(2)},
                 quantidades de votos nulos ${quantVnulos.toFixed(2)},
                  quantidades de votos validos ${quantValidos.toFixed(2)}`)
}
eleições();