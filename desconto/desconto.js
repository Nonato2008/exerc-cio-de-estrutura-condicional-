let valorCompra = parseFloat(prompt("Informe o valor da compra:"))

const desconto = (valorCompra * 0.1)

let descontoTotal = valorCompra - desconto

if (isNaN (valorCompra)){
    alert("Este número não é valído!")
}

if (valorCompra >= 100){
    alert ("Você ganhou um desconto de 10%!")
    alert ("Você recebeu um desconto de " +desconto+ " reais em relação ao valor da sua compra. Sua compra ao todo deu "  +descontoTotal+ " reais")
} else {
    alert ("Você não ganhou o desconto, sua compra ao todo deu " +valorCompra+ " reais")
}