import { evaluarNumero, generarNumero } from "./logic.js";

const btnComprobar = document.getElementById("btn-comprobar");
const btnIntentar = document.getElementById("btn-intentar");
const numeroGenerado = document.getElementById("numero-generado");
const inputNumero = document.getElementById("input-usuario");

let numeroAleatorio = generarNumero();

btnComprobar.addEventListener("click", (ev) => {
  ev.preventDefault();

  if (inputNumero.value === "" || inputNumero.value > 10) {
    alert("Ingresa un número válido");
  } else {
    numeroGenerado.textContent = numeroAleatorio;
    let resultado = evaluarNumero(parseInt(inputNumero.value), numeroAleatorio);
    btnComprobar.textContent = resultado;
    btnComprobar.disabled = true;
  }
});

btnIntentar.addEventListener("click", (ev) => {
  ev.preventDefault();
  numeroAleatorio = generarNumero();
  numeroGenerado.textContent = "";
  inputNumero.value = "";
  btnComprobar.textContent = "Adivinar";
  btnComprobar.disabled = false;
});
