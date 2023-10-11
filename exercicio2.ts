import * as leitor from "readline-sync"

export class Aluno {
    nomedoaluno: String;
    notas: Number[] = []
    media:Array<Number>[] = []
 
    constructor(nomedoaluno: String){
    this.nomedoaluno = nomedoaluno;
    }

    pesquisadosalunos(){
        console.log(`O nome do aluno se chama: ${this.nomedoaluno}`)
        console.log(`A primeira nota do aluno é  ${this.notas}`)
        console.log(`A segunda nota do aluno é ${this.notas}`)
        console.log(`A terceira nota do aluno é ${this.notas}`)
    }
    setNotas(n1: Number, n2: Number, n3: Number){
        this.notas.push(n1)
        this.notas.push(n2)
        this.notas.push(n3)
        
    }
    getMedia(): number{
        let media = (this.notas[0],  this.notas[1],  this.notas[2]) / 3
        return media
    }
}

main()
