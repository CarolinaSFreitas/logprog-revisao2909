const prompt = require("prompt-sync")()

const valorHora = Number(prompt("Valor da Hora R$: "))
const tempo = Number(prompt("Tempo de Uso (min): "))

const cobrar = Math.ceil(tempo / 60)

console.log(`Pagar R$: ${(cobrar*valorHora).toFixed(2)}`)