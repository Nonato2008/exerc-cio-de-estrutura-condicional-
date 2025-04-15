let num = parseInt(prompt("Digite um número:"));

if (isNaN(num)) {
    alert("Error este número não é válido! Digite apenas números.")
} else {


    if (num > 0) {
        alert("Este número é positivo")
    } else {
        if (num == 0) {
            alert("Este número é igual zero")
        } else {
            alert("Este número é negativo")
        }
    }

}