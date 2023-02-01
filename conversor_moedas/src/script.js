var nome = prompt("Qual seu nome?");

var valorEmDolar = parseFloat(prompt("Qual o valor em dólar?"));
var cotacaoDolar = 5.32;
var cotacaoBitcoin = 0.000043;

var valorEmReal = (valorEmDolar * cotacaoDolar).toFixed(2);
var valorEmBitcoin = (valorEmDolar * cotacaoBitcoin).toFixed(5);

alert(
  nome +
    ", a conversão de " +
    valorEmDolar +
    "USD é de: \n" +
    valorEmReal +
    "BRL; \n" +
    valorEmBitcoin +
    "BTC;"
);
