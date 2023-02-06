//solução caso a pessoa coloque algum link que não é imagem (if enderecoImagem.endsWith) - ok
//clica no banner do filme e redireciona pro trailer no youtube -> tag anchor - ok
//estruturar com listas de filmes/trailers -> push ok
//Criar um botão para remover um filme na tela; ok
//Além de colocar a imagem do filme, também adicionar o nome por meio de outro input; ok
//Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme. - não precisa

var listaIdsFilmes = [];

var divMae = document.getElementById('listaFilmes');//essa é a div onde os filmes vão aparecer

function adicionarFilme(){
    //atribuindo o valor dos inputs pra variáveis
    var enderecoImagem = document.getElementById('enderecoImagem').value;
    var nomeFilme = document.getElementById('nomeFilme').value;
    var idDivFilme = nomeFilme.toLowerCase().replace(/\s/g, ""); //troca o espaço por nada
    var urlTrailer = document.getElementById('urlTrailer').value; 
   
    if (validaFilme(enderecoImagem, idDivFilme, urlTrailer)){
        desenhaFilmeNaTela(nomeFilme, enderecoImagem, urlTrailer, idDivFilme);
        //adicionando os novos dados nas listas
        listaIdsFilmes.push(idDivFilme);
        //zerando o input depois de clicar no botão
        limpaCadastro();
    } 
}

function removerFilme(){
    var nomeFilmeRemocao = document.getElementById('nomeFilmeRemocao').value;
    var idDivFilme = nomeFilmeRemocao.toLowerCase().replace(/\s/g, "");
    if(!validaIdExistente(idDivFilme)){
        alert('Filme não encontrado.');
        return;
    }
    var divFilme = document.getElementById(idDivFilme);
    divFilme.remove();
    document.getElementById('nomeFilmeRemocao').value = '';
    listaIdsFilmes.splice(listaIdsFilmes.indexOf(nomeFilmeRemocao), 1);
}

function validaFilme(enderecoImagem, idDivFilme, urlTrailer){
    if(!validaExtensao(enderecoImagem)){
        alert('O tipo de arquivo não é válido.');
        document.getElementById('enderecoImagem').value = '';
        return false;
    }
    if(validaIdExistente(idDivFilme)){ // se o filme já existe na lista
        alert('Esse filme já foi cadastrado!');
        limpaCadastro();
        return false;
    }
    if(!validaUrlTrailer(urlTrailer)){
        alert('O vídeo deve ser do Youtube.');
        document.getElementById('urlTrailer').value = '';
        return false;
    }
    return true; // se não entrou em nenhum dos ifs, validou
}

function validaExtensao(enderecoImagem){
    return enderecoImagem.endsWith('jpeg') || enderecoImagem.endsWith( 'jpg');  //retorna um boleano
}

function validaIdExistente(idDivFilme){
    var indiceFilme = listaIdsFilmes.indexOf(idDivFilme);
    return indiceFilme > -1;
}

function validaUrlTrailer(urlTrailer){
    return urlTrailer.toLowerCase().includes('youtube');
}

function limpaCadastro(){
    document.getElementById('enderecoImagem').value = '';
    document.getElementById('nomeFilme').value= '';
    document.getElementById('urlTrailer').value = '';
}

function desenhaFilmeNaTela(nomeFilme, enderecoImagem, urlTrailer, idDivFilme){
    var filmeWrapper = document.createElement('div');
    filmeWrapper.setAttribute('id', idDivFilme);//nessa div estará as infos de cada filme reunidas/mudando o atributo id pro nome do filme
    //criando o título
    var elementoTitulo = document.createElement('p'); 
    elementoTitulo.innerText = nomeFilme;       
    //desenhando o poster na tela
    filmeWrapper.innerHTML = "<a href ='" + urlTrailer + "' target ='_blank'>" + "<img src= " + enderecoImagem + "></a>";
    //colocando tudo na div - colocando no lugar certo do html
    filmeWrapper.appendChild(elementoTitulo); 
    divMae.appendChild(filmeWrapper);
}
