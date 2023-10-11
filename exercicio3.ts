import * as leitor from "readline-sync"

export class Calculadora {
    n1: number;
    n2: number;
    setValores(){
        this.n1 = leitor.questionFloat("Insira o n1: ")
        this.n2 = leitor.questionFloat("Insira o n2: ")
    }
    getSoma(): number{return this.n1 + this.n2}
    getMenos(): number{return this.n1 - this.n2}
    getVezes(): number{return this.n1 * this.n2}
    getDividir(): number{return this.n1 / this.n2}

}
function main(){
    let calc = new Calculadora()
    calc.setValores()
    console.log("A soma: ", calc.getSoma());
    console.log("A multiplicacao: ", calc.getVezes());
    console.log("A subtracao: ", calc.getMenos());
    console.log("A divisao: ", calc.getDividir());
}
main()
