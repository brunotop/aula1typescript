//Interpretaçao das perguntas:

//Resposta 1:
//Qual é a sintaxe básica do loop "while" em JavaScript?
// Tem a funçao de enquanto o codigo nao chega em algum certo ponto do programa que ele der falso, ele ficara executando infinitamente

//Resposta 2:
//Como podemos usar o "switch case" em conjunto com o loop "while"?
//

//Resposta 3:
//Como podemos definir múltiplos casos para um único bloco de código no
//"switch case"?
//Podemos definir isso ate o programador especificar o codigo diferente a ser executado em varias condiçoes

//Resposta 4:
//É obrigatório usar a declaração "break" após cada caso no "switch case"?
//sim, pois se nao tiver no codigo, ele continuara executando

//Resposta 5:
//Podemos usar expressões booleanas nos casos do "switch case"?
//sim 

//Resposta 6:
//É possível ter um caso padrão no "switch case"? Se sim, como podemos usá-lo?
//Nao

//Resposta 7:
//O que acontece se não houver nenhum caso correspondente ao valor fornecido no "switch case"?
//Ele nao ira executar o programa e pode acaba dando erro.

//Resposta 8:
//Podemos usar o "switch case" sem um loop? Se sim, qual seria um exemplo de uso?
//sim, um exemplo disso seria se o codigo

//Resposta 9:
//É possível ter casos vazios no "switch case"? Se sim, por que usaríamos isso?
//Nao, pois o codigo do programa nao executaria, ele ocorreria um erro e o programa nao proseguiria.

//Exercicio de Escrita:

//Exercicio 1:
//Crie um loop "while" que solicite ao usuário um número de 1 a 3 e exiba uma mensagem correspondente usando "switch case"
/*
import * as leitor from "readline-sync"
let usuário = leitor.question("Escolha um numero de 1 a 3: ")


switch (usuário) {
    case '1':
        console.log("fv")        
        break;
    case '2':
        console.log("vf")
        break
    case '3':
        console.log("def")
        break
    default:
        console.log("Sem resposta")
        break;
}

//Exercicio 2:
//Faça um loop "while" que peça ao usuário para digitar uma cor e, em seguida, use "switch case" para exibir uma mensagem correspondente do tipo 
//“Amarelo me lembra primavera”, use sua criatividade!.

import * as leitor from "readline-sync"
let cor = leitor.question("Escolha uma cor: ")

switch (cor) {
    case 'amarelo':
        console.log("Amarelo me lembra primavera")
        break
    case 'azul':
        console.log("azul me lembra o mar.")
        break
    case 'preto':
        console.log("Me lembra o vacuo do universo.")
        break
    case 'vermelho':
        console.log("Vermelho me lembra uma ferrari vermelha. ")
        break
    case 'roxo':
        console.log("Roxo me lembra ametista. ")
        break
    default:
        console.log("Nenhuma cor selecionada. Escolha outra cor: ")
        break
}

//Exercicio 3:
//Faça um loop "while" que peça ao usuário para digitar um número de 1 a 12 e,
//em seguida, use "switch case" para exibir o nome do mês correspondente.

import * as leitor from "readline-sync"
let mes = leitor.question("Escolha um Mes de 1 a 12: ")
switch (mes) {
    case '1':
        console.log("Mes de Janeiro")        
        break;
    case '2':
        console.log("Mes de Fevereiro")
        break
    case '3':
        console.log("Mes de Março")
        break
    case '4':
        console.log("Mes de Abril")        
        break;
    case '5':
        console.log("Mes de Maio")
        break
    case '6':
        console.log("Mes de Junho")
        break
    case '7':
        console.log("Mes de Julho")
        break
    case '8':
        console.log("Mes de Agosto")
        break
    case '9':
        console.log("Mes de Setembro")
        break
    case '10':
        console.log("Mes de Outubro")
        break
    case '11':
        console.log("Mes de Novembro")
        break
    case '12':
        console.log("Mes de Dezembro")
        break
    default:
        console.log("Opçao inexistente. Tente Novamente.")
        break
}

//Exercicio 4
//Crie um loop "while" que solicite ao usuário um código de produto (A, B ou C) e exiba uma mensagem informando o preço correspondente usando "switch case".
import * as leitor from "readline-sync"
let codigo = leitor.question("Qual e o codigo do produto: ")
switch(codigo){
    case '5465':
        console.log("O valor desse produto é R$ 12,47.")
        break
    case '5678':
        console.log("O valor desse produto é R$ 34,90.")
        break
    case '1234':
        console.log("O valor do produto é R$ 88,73.")
        break
    default:
        console.log("Produto sem valor no momento, coloque outro codigo.")
        break
}
*/
//Exercicio 5
//Crie um loop "while" que solicite ao usuário uma nota de 0 a 100 e exiba uma mensagem informando o conceito correspondente (A, B, C, D ou F) usando
//"switch case". Utilize condicionais nessa questão.

import * as leitor from "readline-sync"
let nota = leitor.question("De uma nota de 0 a 100: ")
