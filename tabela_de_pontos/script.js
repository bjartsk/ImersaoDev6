//DESAFIOS
//Fazer a lógica de quando houver um empate, obrigatoriamente deveria já ajustar como empate para os demais jogadores;
//Validar se todos os pontos estão fazendo sentido, tanto o número de empates, derrotas e vitórias com os demais jogadores (impossível haver mais vitórias que derrotas, por exemplo);
//Adicionar a imagem de cada jogador;
//Criar um botão para zerar todos os pontos; ok
//Criar um botão e inputs (campos de texto) para adicionar novos jogadores, com seus respectivos dados; -> USAR LISTAS E ITERAÇÃO ok


//onde vamos colocar os jogadores no html
var elementoTabela = document.getElementById('tabelaJogadores')
var listaJogadores = []
redesenharTabela()

function redesenharTabela(){
    elementoTabela.innerHTML = ''
    for(i in listaJogadores){
        var jogador = listaJogadores[i]
        //crase é template string. escreve ao mesmo tempo html e js
        elementoTabela.innerHTML += `
            <tr>
                <td>${jogador.nome}</td>
                <td>${jogador.vitoria}</td>
                <td>${jogador.empate}</td>
                <td>${jogador.derrota}</td>
                <td>${jogador.vitoria * 3 + jogador.empate}</td>
                <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
                <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
                <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
                <td><button onClick="excluirJogador(${i})">Excluir jogador</button></td>
            </tr>
        ` 
    }
}

function adicionarJogador(){
    var nomeJogador = document.getElementById('nomeJogador').value
    var novoJogador = {}
    novoJogador.nome = nomeJogador
    novoJogador.vitoria = 0
    novoJogador.empate = 0
    novoJogador.derrota = 0
    listaJogadores.push(novoJogador)
    document.getElementById('nomeJogador').value = ''
    redesenharTabela()
}

function adicionarVitoria(indiceJogador){
    listaJogadores[indiceJogador].vitoria++
    redesenharTabela()   
}

function adicionarEmpate(indiceJogador){
    listaJogadores[indiceJogador].empate++
    redesenharTabela()
}

function adicionarDerrota(indiceJogador){
    listaJogadores[indiceJogador].derrota++
    redesenharTabela()
}

function zerarPontos(){
    for(i in listaJogadores){
        listaJogadores[i].vitoria = 0
        listaJogadores[i].empate = 0
        listaJogadores[i].derrota = 0
    }
    redesenharTabela()
}

function excluirJogador(indiceJogador){
    listaJogadores.splice(indiceJogador, 1)
    redesenharTabela()
}