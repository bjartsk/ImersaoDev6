var numeroSecreto = parseInt(Math.random() * 1000 + 1); 

var contador = 10;

while(chute != numeroSecreto){
  while(contador > 0){
    var chute = prompt('Escolhi um número entre 1 e 1000. Duvido que você adivinhe!');

    if(chute == numeroSecreto) {
      alert('Eba, acertou! O número secreto é ' + numeroSecreto);
      break;
    } else if (chute < numeroSecreto) {
       alert('Ih, errou! O número secreto é maior do que ' + chute + '. Restam ' + contador + ' tentativas.')
    } else if(chute > numeroSecreto){
        alert('Ih, errou! O número secreto é menor do que ' + chute + '. Restam ' + contador + 'tentativas')
    } else {
        alert('Tem que ser entre 1 e 1000!');
    }
  
    contador--; 
    
    if(contador == 0){
      alert('Já era!')
    }
  }
} 
