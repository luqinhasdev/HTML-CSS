let primeiro, segundo, sinal;

function enviarDigito(digito) {
  const visor = document.getElementById("visor");

  if (visor.value === "0" || visor.value === sinal) {
    visor.value = "";
  }

  visor.value += digito;
}

function enviarPonto(ponto) {
  const visor = document.getElementById("visor");
  if (!visor.value.includes(".")) {
    visor.value += ponto;
  }
}

function limpaVisor() {
  document.getElementById("visor").value = "0";
  primeiro = "";
  segundo = "";
  sinal = "";
}

function operation(operacao) {
  primeiro = document.getElementById("visor").value;
  sinal = operacao;
  document.getElementById("visor").value = operacao;
}

function squareRoot() {
  primeiro = document.getElementById("visor").value;
  let result = Math.sqrt(parseFloat(primeiro));
  if (isNaN(result)) {
    result = "Erro";
  }
  document.getElementById("visor").value = result;
  primeiro = result;
}

function square() {
  // Função para elevar um número ao quadrado
  primeiro = document.getElementById("visor").value;
  let result = Math.pow(parseFloat(primeiro), 2);
  if (isNaN(result)) {
    result = "Erro";
  }
  document.getElementById("visor").value = result;
  primeiro = result;
}

function even() {
  const visor = document.getElementById("visor");

  if (sinal && visor.value !== sinal) {
    segundo = visor.value;
  }

  let result;

  switch (sinal) {
    case "+":
      result = parseFloat(primeiro) + parseFloat(segundo);
      break;
    case "-":
      result = parseFloat(primeiro) - parseFloat(segundo);
      break;
    case "X":
    case "x":
      result = parseFloat(primeiro) * parseFloat(segundo);
      break;
    case "/":
      if (parseFloat(segundo) === 0) {
        result = "Erro: N/0";
      } else {
        result = parseFloat(primeiro) / parseFloat(segundo);
      }
      break;
    case "n²":
      result = Math.pow(parseFloat(primeiro), parseFloat(segundo));
      break;
    default:
      result = visor.value;
      break;
  }

  if (isNaN(result)) {
    result = "Erro";
  }

  visor.value = result;
  primeiro = result;
  sinal = "";
}
