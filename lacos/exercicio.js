// // Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%. Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.

// let  cor;
// do {
//     cor = prompt("Qual a cor da etiqueta:").toLowerCase()

// }
// while(cor != "verde" && cor != "amarelo" && cor != "azul" && cor != "vermelho"){
   
// }


// let preco = Number(prompt("Qual valor do produto:"))
// let desconto
// switch(cor){
//     case "verde":
//         desconto = 0.1  
//         break
//     case "amarelo":
//         desconto = 0.2
//         break
//     case "azul":
//         desconto = 0.3
//         break
//     case "vermelho":
//         desconto = 0.4
//         break
// }
// let valort = preco * (preco - desconto)
// let resposta = alert(`o valor total é ${preco} e com desconto ficou ${valort}`)


// Crie um programa que peça ao usuário para digitar uma senha. Continue pedindo a senha até que o usuário digite "1234". Use um laço do…while para controlar as tentativas e, quando a senha correta for inserida, exiba a mensagem "Acesso Permitido".

const senhaCorreta = "1234";

while (true) {
    const senhaInserida = prompt("Insira a senha:");

    if (senhaInserida === senhaCorreta) {
        alert("Senha correta!");
        break; // Interrompe o loop
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}


// // Você precisa criar um programa que ajude a calcular a média de notas de uma turma. O programa deve pedir ao usuário a quantidade de alunos na turma e, em seguida, solicitar a nota de cada aluno. Utilize um laço for para capturar as notas e acumular a soma. Após inserir todas as notas, o programa deve calcular e exibir a média da turma.

// let alunos = parseInt(prompt("Quantos alunos você quer registrar?"));
// let notas = [];
// let nota


//   for (let i = 1; i < alunos; i++) {
//     nota += parseFloat(prompt(`Digite a nota do aluno `));
   
//   }
//   const media = nota/alunos
//    alert(media)

//  alert("Notas dos alunos:", notas);
// } else {
//   alert("Número inválido de alunos.");


let valorVenda = 0
let totAcumulado = 0

do {
    valorVenda = parseFloat(prompt("digite o valor da venda ou 0 para sair"))
    totAcumulado += valorVenda
    alert(totAcumulado)
} while (valorVenda !== 0);
