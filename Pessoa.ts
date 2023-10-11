import * as leitor from "readline-sync"


export class Pessoa{
    nome: String;
    cpf: Number;
    Rg: Number;
    cor: String;
    idade: Number;

    constructor(nome: String, cpf: Number, Rg: Number, cor: String, idade: Number){
        this.nome = nome;
        this.cpf = cpf;
        this.Rg = Rg;
        this.cor = cor;
        this.idade = idade;
    }

    saudacao(){
        console.log(`Olá, meu nome é ${this.nome}`);
    }
    valor1(){
        console.log(`Meu CPF é ${this.cpf}`);
    }
    valor2(){
        console.log(`Meu RG é ${this.Rg}`);
    }
    cores(){
        console.log(`Minha cor é ${this.cor}`);
    }
    idade1(){
        console.log(`eu tenho ${this.idade}`)
    }
    setNome(){
        let nomeDois = leitor.question("Insira o novo nome: ")
        this.nome = nomeDois
    }

    setCPF(){
        let cpfDois = leitor.questionInt("Insira o novo CPF: ")
        this.cpf = cpfDois
    }

    setRg(){
        let RgDois = leitor.question("Insira o novo Rg: ")
        this.Rg = RgDois
    }

    setcor(){
        let corDois = leitor.question("Insira a cor: ")
        this.cor = corDois
    }

    setidade(){
        let idadeDois = leitor.question("Insira a idade: ")
        this.idade = idadeDois
    }
}
