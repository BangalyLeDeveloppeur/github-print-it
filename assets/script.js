const slides = [
  {
    Image: "slide1.jpg",
    taglen:
      "<p>Impressions tous formats <span>en boutique et en ligne</span></p>",
  },
  {
    Image: "slide2.jpg",
    taglen:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    Image: "slide3.jpg",
    taglen: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    Image: "slide4.png",
    taglen: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const changerParagraphe = document.querySelector(".dots p");
let numero = 0;
function changslide(sens) {
//ajout de +-1 a ma varibale selon sens.
numero = numero + sens;
if (numero > slides.length - 1) numero = 0;
if (numero < 0) numero = slides.length - 1;
document.getElementById("slide").src = "./assets/images/slideshow/" + slides[numero].Image;
changerParagraphe.innerHTML = slides[numero].taglen;
};

///points
const buttons = document.querySelectorAll(".arrow");
const dot = document.querySelectorAll(".dot");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextdot = button.getAttribute("id") === "next" ? 1 : -1;
    const dotSelested = document.querySelector(".dot-selected");
    newIndex = calcNextdot + [...dot].indexOf(dotSelested);
    changslide(calcNextdot);
    if (newIndex > [...dot].length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = [...dot].length - 1;

    dot[newIndex].classList.add("dot-selected");
    dotSelested.classList.remove("dot-selected");
  });
});
