let num = parseInt(prompt("Informe um número: ")); //declarar váriavel que será usada;

if (isNaN (num)){ //código para identificar se o usúario não escreveu letras ao invés de números
    alert("Este número não é válido")
} else { 
    if (num % 5 == 0){ // se a sobra da divisão for igual à 0, ir´aexibir o alerta abaixo 
        alert ("Este número é múltiplo de 5!")
    } else { // senão for igual à 0 exibirá o seguinte alerta abaixo
        alert ("Este número não é múltiplo de 5!")
    }
};