let num = parseInt(prompt("Informe um número:")); //declarar váriavel que será usada;

if (isNaN (num)){ //código para identificar se o usúario não escreveu letras ao invés de números
    alert("Esse número não é válido!")
    
} else {
    if (num % 2 == 0){ // se a sobra da divisão for igual à 0
        alert ("Este número é par!")
    } else {
        alert ("Este número é impar!")
    } 
}   