const numUm = parseInt(prompt("Insira um número:"))

//isNaN() - ver se o que foi escrito é realmente um número, se NÃO tiver um número ele volta um valor booleano verdadeiro (true)

if (isNaN(numUm)) {
    // verifica se a conversão resultou em um número válido
    //O espaço das instruções de uma estrura condicional se chama indentação
    alert("Erro: você não digitou um número!");

}

if (!isNaN(numUm)) {
    //só solita o segundo número se o primeiro for válido

    const numDois = parseInt(prompt("Insira outro número:"));


    if (isNaN(numDois)) {
        alert("Erro você não digitou um número válido!");
    }

    if (!isNaN(numDois) && !isNaN(numUm)) {

        // shift + alt + para organizar a ondentação

        if (numUm === numDois) {
            alert("Os números são iguais");
        }

        if (numUm !== numDois) {
            alert("Os números são diferentes");
        }

    }
}
