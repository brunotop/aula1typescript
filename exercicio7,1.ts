import * as leitor from "readline-sync"
import { Circulo, Triangulo } from "./exercicio7"

let opcao = leitor.questionInt("Digite 1 para circulo, 2 para triangulo e 3 para retangulo: ")

if(opcao === 1){
    let raio = leitor.questionInt("informe o valor do raio do circulo: ")
    let circulo = new Circulo(raio)
    circulo.getArea()
}else if (opcao === 2){
    
}