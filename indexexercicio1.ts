import * as leitor from "readline-sync"
import { Aluno } from "./exercicio2";

function main(): void{
    let aluno = cadastro()
    console.log(aluno.getMedia());

}
function cadastro(): Aluno{

    let nome = leitor.question("Insira o nome do aluno")
    let aluno = new Aluno(nome)
    console.log("Aluno criado com sucesso!");

    let n1 = leitor.question("")
    let n2 = leitor.question("")
    let n3 = leitor.question("")
}