const numAleatorio = Math.floor(Math.random() * 10) + 1;

const numTentativa = parseInt(prompt("Tente adivinhar um número entre 1 e 10"));

if(isNaN(numTentativa) || numTentativa<1 || numTentativa>10){
    alert("Error: você não digitou um número válido!")
} else{

if (numTentativa == numAleatorio){
    alert("Parabéns! Você acertou o número secreto!")
}else{
    alert(`Que pena! O número correto era ${numAleatorio}`)
}

} 