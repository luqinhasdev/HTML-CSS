let check = [" _ "];

let rightLetters = [];

let wrongLetters = [];

let result = "";

let numImages = 1;

function enableStartButton() {
  const Word = document.getElementById("secret").value;
  if (Word.length >= 6) {
    document.getElementById("buttonStart").disabled = false;
  }
}

function startGame() {
  document.getElementById("try").disabled = false;
  document.getElementById("checkbutton").disabled = false;
  document.getElementById("secret").disabled = true;
  document.getElementById("buttonStart").disabled = true;
  document.getElementById("try").focus();
}

function randomizeNames() {
  const Word2 = document.querySelector("#secret").value.toLowerCase();
  const Letter = document.querySelector("#try").value.toLowerCase();
  document.getElementById("panel").innerHTML = "";
  check = [];

  for (let i = 0; i < Word2.length; i++) {
    check.push(" _ ");
  }

  for (let i = 0; i < Word2.length; i++) {
    if (Word2.charAt(i) === Letter) {
      if (!rightLetters.includes(Letter)) {
        rightLetters.push(Letter);
      }
      check[i] = Letter;
    }
  }

  result = "";
  for (let i = 0; i < check.length; i++) {
    result += check[i] + " ";
  }

  document.getElementById("panel").innerHTML = result.trim();
}
