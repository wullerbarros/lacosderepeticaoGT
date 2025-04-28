
let tarefas = [];
let adicionarTarefa = prompt('Digite uma tarefa ou 0 para sair')


do {
    if (adicionarTarefa !== '0' && adicionarTarefa !== '') {
        tarefas.push(adicionarTarefa)
    }
    adicionarTarefa = prompt('Digite uma tarefa ou 0 para sair')
} while (adicionarTarefa !== '0')

alert(tarefas)

let remocao = prompt('Deseja remover o primeiro item da lista? sim ou não?')

while (remocao === 'sim' && tarefas.length > 0) {
    tarefas.shift()
    if (tarefas.length == 0) {
        alert('Você não possui mais tarefas para excluir')
    } else {
        alert(tarefas)
        remocao = prompt('Deseja remover o primeiro item da lista? sim ou não?')
    }
}