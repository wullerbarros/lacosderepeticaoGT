
let listaDetarefas = [];
let entrada = prompt("quais tarefas vc fara hoje:")

do{
    if (entrada !== "0" && entrada !== ""){
        listaDetarefas.push(entrada);

    } 
}
while (entrada !== "0")
    
    alert(listaDetarefas)




let remocao = prompt("deseja remover o primeiro intem da lista? sim ou não?")

while(remocao === "sim" && listaDetarefas.length > 0){
    listaDetarefas.shift()
    if ( listaDetarefas.length == 0) {
        alert("Voce nao possui mais tarefas para excluir")
    } else {
        alert(listaDetarefas);
        remocao = prompt("deseja remover o primeiro intem da lista? sim ou não?")
    }
  
    
}






// let listaDeAtendimento = [];
// let nomeDaPessoa


// do {
//     nomeDaPessoa = prompt("nome da pessoa:")
//     if (nomeDaPessoa !== "lista") {
//         listaDeAtendimento.push(nomeDaPessoa);
//   }
// } while (nomeDaPessoa != "lista");

// alert(listaDeAtendimento)