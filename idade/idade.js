let idade = parseInt(prompt("Informe sua idade:")); //declarar váriavel que será usada;

if (isNaN (idade)){ //código para identificar se o usúario não escreveu letras ao invés de números
    alert("Isto não é um número válido")

}else{

    if (idade >= 18) { //se a idade for maior ou igual à 18     
    alert ("Você é maior de idade!")
} else {
    alert ("Você é menor de idade!")
}
}