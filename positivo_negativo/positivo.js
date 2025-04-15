let num = parseInt(prompt("Digite um número:")); //declarar váriavel que será usada;

if (isNaN(num)) { //código para identificar se o usúario não escreveu letras ao invés de números
    alert("Error este número não é válido! Digite apenas números.")
} else { //se não tiver letras irá continuar ocódigo


    if (num > 0) { //se o número for maior que zero aparecerá o seguinte alerta abaixo
        alert("Este número é positivo")
    } else { // senão for maior que zero será zero ou negativo
        if (num == 0) {
            alert("Este número é igual zero")
        } else {
            alert("Este número é negativo")
        }
    }

}