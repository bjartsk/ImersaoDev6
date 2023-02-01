var nome = prompt("Qual seu nome?");
var distanciaAnoLuz = prompt("Quantos anos-luz até a estrela que você vai?");
var anoLuzKm = 9.461 * Math.pow(10, 12);
var distanciaKm = distanciaAnoLuz * anoLuzKm;

var velocidadeNave = prompt("Qual a velocidade em km/h da sua nave?");
var tempoViagem = Math.trunc(distanciaKm / velocidadeNave / 24 / 365); //tempo da viagem em anos, considerando 24h por dia e 365 dias no ano

alert(
  nome +
    ", seu caminho será de " +
    distanciaKm +
    " km, e durará " +
    tempoViagem +
    " anos. Pega a toalha e não entre em pânico!"
);
