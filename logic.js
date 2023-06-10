export function evaluarNumero(entradaUsuario, numeroAleatorio) {
  let mensaje;

  if (entradaUsuario !== numeroAleatorio) {
    return (mensaje = "Perdiste 😢");
  } else {
    return (mensaje = "Ganaste 🎊");
  }
}

export const generarNumero = () => Math.floor(Math.random() * 9) + 1;
