



/* PARTE DO MENU*/

function openNav(){
    document.getElementById('myNav').style.width = '100%'
}

function closeNav(){
    document.getElementById('myNav').style.width = '0%'
}



/*                    CONVERSOU DE MOEDAS                              */

function ConverteremEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
  
    var valorEmEuro = valorEmReal / 5.19;
  
    var EuroFixada = valorEmEuro.toFixed(1);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = " O resultado em Euro é  " + EuroFixada;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverteremDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
  
    var valorEmDolarNumerico = valorEmReal / 5;
  
    var dolarFixada = valorEmDolarNumerico.toFixed(1);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = " O resultado em Dolar é U$ " + dolarFixada;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverteremPeso() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
  
    var valorEmPesoMexicano = valorEmReal / 0.26;
  
    var pesoFixada = valorEmPesoMexicano.toFixed(1);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = " O resultado em Peso Mexicano é " + pesoFixada;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  function ConverteremBitcoin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
  
    var valorBitCoin = valorEmReal / 99413.41;
  
    var bitCoinFixada = valorBitCoin.toFixed(1);
  
    var valorBitCoin = valorEmReal / 99413.41;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em Bitcoin é " + valorBitCoin;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  /*                   FIM CONVERSOU DE MOEDAS                              */
