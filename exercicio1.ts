import * as leitor from "readline-sync"

export class Livro {
    nomedolivro: String;
    autor: String;
    anopublicacao: Number;

    constructor(nome: String, Autor: String, anopublicacao: Number){
        this.nomedolivro = nome;
        this.autor = Autor;
        this.anopublicacao = anopublicacao;
    } 
     
    obterDetalhes(){
        console.log(`Nome do Livro é: ${this.nomedolivro}`)
        console.log(`O autor desse livro é: ${this.autor}`)
        console.log(`O ano de publicacao deste livro é: ${this.anopublicacao}`)
    }
}
function main(): void{
    let nomedolivro = leitor.question("Qual o nome do livro? ")
    let autor = leitor.question("Quem é o autor do livro? ")
    let anopublicacao = leitor.questionInt("Qual o ano que esse livro foi publicado? ")
    let livro = new Livro(nomedolivro, autor, anopublicacao)
    livro.obterDetalhes()
}
main()
