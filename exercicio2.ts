import * as leitor from "readline-sync"
function main(){
    let nome = leitor.question("insira o nome do item: ");
    let valor = leitor.questionFloat("Insira o valor do item: ");
    let desconto = leitor.questionInt("Insira o desconto: ");
    let valordesconto = ((100-desconto)/100);
    console.log(`O nome do item é: ${nome}`);
    console.log(`O valor do item é: ${valor}`);
    console.log(`O valor do desconto é: ${valor*valordesconto}`);

}
main()
