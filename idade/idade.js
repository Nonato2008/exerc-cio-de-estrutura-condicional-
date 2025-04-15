let idade = parseInt(prompt("Informe sua idade:"));

if (isNaN (idade)){
    alert("Isto não é um número válido")

}else{

    if (idade >= 18) {
    alert ("Você é maior de idade!")
} else {
    alert ("Você é menor de idade!")
}
}