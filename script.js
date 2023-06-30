const palavras = ["macaco", "elefante", "baleia", "cachorro"];

let img = document.querySelector("img");
let palavraEscolhida = null;
let erros = 0;
let valorUsuario = null;
let jogadas = [];
let array = null;
let stringCompleta = null;
let palavra = null;
let palavraUsuario = null;

function escolherPalavra() {
  const index = Math.floor(Math.random() * palavras.length);
  palavraEscolhida = palavras[index];
  //console.log(palavraEscolhida);//conferir a palavra escolhida
  spPalavraSecreta.innerText = "";
  esconderPalavra(palavraEscolhida);
  separarLetras(palavraEscolhida);
} //Função refatorada com 5 sentenças 

function esconderPalavra(palavraEscolhida) {
  let nUnder = palavraEscolhida.length;
  for (let i = 0; i < nUnder; i++) {
    spPalavraSecreta.innerHTML += " _ ";
  }
} //Função refatorada com 5 sentenças 

function separarLetras(palavraEscolhida) {
  array = palavraEscolhida.split("");
  stringCompleta = array.toString();
  console.log(array);
  console.log(stringCompleta);
} //Função refatorada com 5 sentenças 

function verificarJogo() {
  if (array.includes(valorUsuario)) {
    spPalavraSecreta.innerHTML += valorUsuario;
  } else {
    erros++;
    img.setAttribute("src", `img/Forca0${erros}.png`);
  }
  
  if (palavra == stringCompleta) {
    btnVerificarPalavra.disabled = true;
    spPalavraSecreta.innerHTML = "Você venceu!"; 
  }
  
  if (erros >= 6) {
    btnVerificarPalavra.disabled = true;
    spPalavraSecreta.innerHTML = "Você perdeu!";
  }
  ipPalavraResposta.value = "";
} //Função refatorada com 5 sentenças 

function transformArr() {
  valorUsuario = ipPalavraResposta.value;
  if (array.includes(valorUsuario)) {
    jogadas.push(valorUsuario); // Não consegui fazer/ só funciona se o usuario botar as letras na sequencia correta da palavra
    palavra = jogadas.toString();
  }
} //Função refatorada com 5 sentenças 

function resetar() {
  btnVerificarPalavra.disabled = false;
  btnNovaPalavra.disabled = false;
  ipPalavraResposta.value = "";
  erros = 0;
  img.setAttribute("src", "img/Forca00.png");
} //Função refatorada com 5 sentenças 

btnNovaPalavra.addEventListener("click", () => {
  resetar();
  escolherPalavra();
  console.log(palavraEscolhida);
}) //Função refatorada com 5 sentenças 

btnVerificarPalavra.addEventListener("click", () => {
  transformArr();
  verificarJogo();
}) //Função refatorada com 5 sentenças 

// PASSOS COMPLETOS PARTE 2:
// AT 01: OK
// AT 02: OK
// AT 03: OK
// AT 04: OK
// AT 05: OK

// PASSOS COMPLETOS PARTE 3:
// AT 01: OK
// AT 02: INCOMPLETO
// AT 03: OK
// AT 04: OK
// AT 05: INCOMPLETO