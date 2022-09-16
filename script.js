var cartas1 = {
    nome: "Naruto",
    atributos: {
        ataque: 40,
        defesa: 30,
        ninjutsu: 70,
    }

};

var cartas2 = {
    nome: "Sasuke",
    atributos: {
        ataque: 40,
        defesa: 25,
        ninjutsu: 65,
    }

};

var cartas3 = {
    nome: "Sakura",
    atributos: {
        ataque: 50,
        defesa: 30,
        ninjutsu: 60,
    }

};

var cartas4 = {
    nome: "Hashirama",
    atributos: {
        ataque: 70,
        defesa: 60,
        ninjutsu: 80,
    }

};

var cartas5 = {
    nome: "Kakashi",
    atributos: {
        ataque: 55,
        defesa: 50,
        ninjutsu: 70,
    }

};

var cartas = [cartas1, cartas2, cartas3, cartas4, cartas5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);

  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 5);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById(`btnSortear`).disabled = true;
  document.getElementById(`btnJogar`).disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById(`opcoes`);
  var opcoesTexto = ``;
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `<input type='radio' name='atributo' value=${atributo} >${atributo}`;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById(`resultado`);
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = `Você venceu!`;
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = `Você perdeu! O valor do atributo da carta da máquina é maior.`;
  } else {
    elementoResultado.innerHTML = `Empatou! Os atributos têm valores iguais`;
  }
  console.log(cartaMaquina);
}
