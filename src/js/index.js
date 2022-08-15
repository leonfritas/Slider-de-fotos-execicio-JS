const setaVoltar = document.getElementById("setavoltar");
const setaAvancar = document.getElementById("setaavancar");
const slides = document.getElementsByClassName("slide");

console.log(setaAvancar);
console.log(setaVoltar);
console.log(slides);

let imagemAtual = 0;

setaAvancar.addEventListener("click", function () {
  if (imagemAtual === slides.length - 1) {
    return;
  }

  imagemAtual++;

 
  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }
 

  imagemAtual--;

  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();
});

function mostrarImagem() {
  slides[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar");
  imagemAberta.classList.remove("mostrar");
}

function mostrarOuEsconderSetas() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if (naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("opacidade");
  } else {
    setaVoltar.classList.add("opacidade");
  }

  const chegouNaUltimaImagem =
    imagemAtual !== 0 && imagemAtual === slides.length - 1;
  if (chegouNaUltimaImagem) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  }
}
