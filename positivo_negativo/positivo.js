let num = parseInt(prompt("Digite um número:")); //declarar váriavel que será usada;

if (isNaN(num)) { //código para identificar se o usúario não escreveu letras ao invés de números
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