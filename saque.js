const prompt = require("prompt-sync")()

const saque = Number(prompt("Valor do saque R$: "))

if (saque % 10 == 0){
    const notas = saque / 10
    console.log(`Você receberá ${notas} notas de R$ 10,00`)
}else{
    console.log(`Não é possível pagar ${saque} com notas de R$ 10,00`)
}
