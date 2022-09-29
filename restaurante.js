const prompt = require("prompt-sync")()

const conta = Number(prompt("Valor da conta R$: "))
const pago = Number(prompt("Valor pago pelo cliente R$: "))

if (pago > conta){
    const troco = pago - conta
    console.log(`Troco R$: ${troco.toFixed(2)}`)
}else if (pago == conta){
    console.log("Obrigado, volte sempre!")
} else{
    const faltou = conta - pago
    console.log(`Ops... faltou R$: ${faltou.toFixed(2)}`)
}




