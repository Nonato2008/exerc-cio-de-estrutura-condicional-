let valorCompra = parseFloat(prompt("Informe o valor da compra:")) //valor da variável obtido através de prompt

const desconto = (valorCompra * 0.1) // valor do desconto obtido apartir através da multiplicação do valor da compra vezes 0.1 

let descontoTotal = valorCompra - desconto // desconto total é adiferença entre valor d aocmpra e desconto

if (isNaN (valorCompra)){ //indentificar se a pessoa não escreveu letras, se sim aparecerá o seguinte alerta
    alert("Este número não é valído!")
}

if (valorCompra >= 100){ // se o valor da compra  for maior ou igual à 100 aparecerá os seguintes alertas
    alert ("Você ganhou um desconto de 10%!")
    alert ("Você recebeu um desconto de " +desconto+ " reais em relação ao valor da sua compra. Sua compra ao todo deu "  +descontoTotal+ " reais")
} else { //senão for maior ou igual à 100 exibirá este alerta
    alert ("Você não ganhou o desconto, sua compra ao todo deu " +valorCompra+ " reais")
}