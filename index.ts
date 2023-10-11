import { Pessoa } from "./Pessoa";
import * as leitor from "readline-sync";

function main(): void{
    const humano1 = metodos()
    let decisao = leitor.question("Voce gostaria de modificar o cadastro? (s/n)")
    if(decisao === "s"){
        editarCadastro(humano1)
    }else {
        console.log("Obrigado, saindo...")
    } 


function cadastros(): Pessoa{
let nome = leitor.question("insira seu nome aqui: ");
let CPF = leitor.questionInt("Insira seu CPF aqui: ");
let Rg = leitor.questionInt("Insira seu RG aqui: ");
let cor = leitor.question("insira sua cor aqui: ");
let idade = leitor.questionInt("Insira sua idade aqui: ");
const humano1 = new Pessoa("josé", 12345678, 13528528, "branco", 20);
return humano1
}

function metodos(): Pessoa{
const humano1 = cadastros()
humano1.valor1()
humano1.valor2()
humano1.cores()
humano1.idade1()
return humano1
    }   

    function editarCadastro(humano1: Pessoa): void{
        humano1.setNome()
        humano1.setCPF()
        humano1.setRg()
        humano1.setcor()
        humano1.setidade()
        humano1.valor1()
        humano1.valor2()
        humano1.cores()
        humano1.idade1()
    }
}

main()
