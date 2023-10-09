import * as leitor from "readline-sync"


function main(){
    let perg1 = leitor.questionInt("Insira o primeiro valor: ");
    let perg2 = leitor.questionInt("Insira o segundo valor: ");
    let perg3 = leitor.questionInt("Insira o terceiro valor: ");
    console.log(soma(perg1, perg2, perg3))
    console.log(subtracao(perg1, perg2, perg3))
    console.log(multiplicacao(perg1, perg2, perg3))
    console.log(divisao(perg1, perg2, perg3))

}

function soma(valor1, valor2, valor3): Number {
    return valor1 + valor2 + valor3

}
function subtracao(valor1, valor2, valor3): Number {
    return valor1 - valor2 - valor3
}
function multiplicacao(valor1, valor2, valor3): Number {
    return valor1 * valor2 * valor3
}
function divisao(valor1, valor2, valor3): Number {
    return valor1 / valor2 / valor3
}
main()

