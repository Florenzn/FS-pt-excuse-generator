const principioDeLaExcusa = [
  "No podre ir",
  "Mi hermano",
  "Lo siento pero",
  "No estare"
];

const enlaceDeLaExcusa = [
  "por que ",
  "tuvo un accidente",
  "esta vez cancelare la reunion",
  "presente ese dia"
];
const motivoDeLaExcusa = [
  "tengo una cita medica.",
  "y lo tengo que acompañar.",
  "por motivos personales.",
  "por que tengo otro compromiso."
];

function generarExcusa() {
  const principio =
    principioDeLaExcusa[Math.floor(Math.random() * principioDeLaExcusa.length)];
  const enlace =
    enlaceDeLaExcusa[Math.floor(Math.random() * enlaceDeLaExcusa.length)];
  const motivo =
    motivoDeLaExcusa[Math.floor(Math.random() * motivoDeLaExcusa.length)];

  return `${principio} ${enlace} ${motivo} `;
}

window.addEventListener("load", () => {
  const excusa = generarExcusa();

  document.body.innerHTML = `<h1>${excusa}</h1>`;
});
//lo hice con un poco de ayuda, tarde pero termine
