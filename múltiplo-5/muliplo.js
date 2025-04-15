let num = parseInt(prompt("Informe um número: "))

if (isNaN (num)){
    alert("Este número não é válido")
} else { 
    if (num % 5 == 0){
        alert ("Este número é múltiplo de 5!")
    } else {
        alert ("Este número não é múltiplo de 5!")
    }
}