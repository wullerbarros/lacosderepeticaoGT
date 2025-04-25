// Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%. Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.

let  cor;
do {
    cor = prompt("Qual a cor da etiqueta:").toLowerCase()

}
while(cor != "verde" && cor != "amarelo" && cor != "azul" && cor != "vermelho"){
   
}


let preco = Number(prompt("Qual valor do produto:"))
let desconto
switch(cor){
    case "verde":
        desconto = 0.1  
        break
    case "amarelo":
        desconto = 0.2
        break
    case "azul":
        desconto = 0.3
        break
    case "vermelho":
        desconto = 0.4
        break
}
let valort = preco * (preco - desconto)
let resposta = alert(`o valor total é ${preco} e com desconto ficou ${valort}`)