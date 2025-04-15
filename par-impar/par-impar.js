let num = parseInt(prompt("Informe um número:"));

if (isNaN (num)){
    alert("Esse número não é válido!")
    
} else {
    if (num % 2 == 0){
        alert ("Este número é par!")
    } else {
        alert ("Este número é impar!")
    } 
}   