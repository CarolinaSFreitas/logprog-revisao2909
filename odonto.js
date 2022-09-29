const prompt = require("prompt-sync")()

const pacientes = Number(prompt("Nº de pacientes: "))

if(pacientes <= 5){
    console.log(`Dentista A: ${pacientes} pacientes`)
}else{
    const dentA = Math.floor(pacientes / 2)
    const dentB = Math.ceil(pacientes / 2)
    console.log(`Dentista A: ${dentA} pacientes`)
    console.log(`Dentista B: ${dentB} pacientes`)
}