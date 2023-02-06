var listaFilmes = ['https://media.fstatic.com/5InBWWYx3biTBTGngpmyueFxI0I=/210x303/smart/filters:format(webp)/media/movies/covers/2011/06/48d88ef3a50edee97138d33a4283af9e.jpg', 'https://media.fstatic.com/p-Fkn9c8i_g6D3245MToWntJ68o=/210x303/smart/filters:format(webp)/media/movies/covers/2011/10/a1138d3cbf00f8f8a31c4a2acaeca432.jpg', 'https://media.fstatic.com/2iXhkeebdefC_TmhTpiPfD-r6ns=/210x303/smart/filters:format(webp)/media/movies/covers/2011/12/bb58794410ae0152c686a73bb490a8c4.jpg', 'https://media.fstatic.com/HXOug9Z-SQBMqMsMZe92jfshILc=/210x303/smart/filters:format(webp)/media/movies/covers/2011/12/fca19f3755bf5663814fa366adc87b80.jpg','https://media.fstatic.com/8GI1dcvO6KRKrB8YoBmQu87361M=/210x303/smart/filters:format(webp)/media/movies/covers/2011/06/892ec92d70287df2228424dc280a9df8.jpg', 'https://media.fstatic.com/J8VYxYKePbYJJVWJdGk9fS06R14=/210x303/smart/filters:format(webp)/media/movies/covers/2012/09/f476a062fb6fe811a533ea269edc0df0.jpg', 'https://media.fstatic.com/espzXUdhAsKputTLN1WE4Ecayfc=/210x303/smart/filters:format(webp)/media/movies/covers/2013/12/vicky-cristina-barcelona_t3805.jpg', 'https://media.fstatic.com/yKMgsgBAKN_lVsuwiYs5FHwqPD8=/210x303/smart/filters:format(webp)/media/movies/covers/2011/08/8ac00d8017b235753b313fcab0bb383c.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGbl_LkkqIVoXjtCcFW7EBGWm0nztOlaGjw&usqp=CAU', 'https://media.fstatic.com/aehm0IcZQvBFBruxbgsi4BaZiac=/210x303/smart/filters:format(webp)/media/movies/covers/2009/08/8aa6159aa4cd5b1df711b84230cd782e.jpg', 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/bbe07b0c671b8b66e416f6a74bf56a1d6bac7c9d2d284eaf9fe5bc42c3104c77._RI_V_TTW_.jpg', 'https://media.fstatic.com/0Gf3w7oDlFyXYkK8DjpQOr4m8Sc=/210x303/smart/filters:format(webp)/media/movies/covers/2013/04/0b33712fa48c7178cde24ad73ffe536f.jpg', 'https://br.web.img2.acsta.net/pictures/19/05/10/10/20/2038884.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/87/02/76/19871246.jpg', 'https://upload.wikimedia.org/wikipedia/pt/1/11/The_Hitchhiker%27s_Guide_to_the_Galaxy.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/1200px-Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg'];
var listaNomes = ['Lola Rennt', 'A invenção de Hugo Cabret', 'Grease', 'Medianeras', 'Scott Pilgrim Contra o Mundo', 'Les Miserables', 'Vicky Cristina Barcelona', 'Sweeney Todd', 'Le Voyage Dans la Lune', 'Oliver Twist', 'Leon the Professional', 'O Auto da Compadecida', 'Parasita', 'Cidade de Deus', 'O Guia do Mochileiro das Galáxias', 'Psycho']
var divPrincipal = document.getElementById("lista_filmes");

function mostrarFilmes(){
    divPrincipal.innerHTML = "";
    for (i in listaFilmes){
        var div = document.createElement('div')
        var img = document.createElement('img') 
        var titulo = document.createElement('p')
        img.src = listaFilmes[i]
        titulo.innerText = listaNomes[i]
        div.appendChild(img)
        div.appendChild(titulo)
        divPrincipal.appendChild(div)
    }
}

  function adicionarFilme(){
    var filmeNovo = document.getElementById("filme").value;
    var tituloNovo = document.getElementById("nome").value;
    listaFilmes.push(filmeNovo)
    listaNomes.push(tituloNovo)
    mostrarFilmes();
    document.getElementById("filme").value = '';
    document.getElementById("nome").value = '';
  }

  mostrarFilmes();