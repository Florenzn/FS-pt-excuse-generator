

function generarExcusa() {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let rnd = Math.random();
  const posicionDelWhoRandom = Math.floor(rnd*(tiposDeWho.length));
  return tiposDeWho[posicionDelWhoRandom];
}
function generarExcusa() {
  const action = ['ate', 'peed', 'crushed', 'broke'];
  let rnd = Math.random();
  const posicionDelActionRandom = Math.floor(rnd*(tiposDeAction.length));
  return tiposDeAction[posicionDelActionRandom];
}
function generarExcusa() {
  const what = ['my homework', 'my phone', 'the car'];
  let rnd = Math.random();
  const posicionDelWhatRandom = Math.floor(rnd*(tiposDeWhat.length));
  return tiposDeWhat[posicionDelWhatRandom];
}
function generarExcusa() {
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  let rnd = Math.random();
  const posicionDelWhenRandom = Math.floor(rnd*(tiposDewhen.length));
  return tiposDewhen[posicionDelWhenRandom];
}


window.addEventListener("load", () => {
  const excusa = generarExcusa();

  document.body.innerHTML = `<h1>${excusa}</h1>`;
});
//me quede por aqui si me pudieran echar una mano con lo que sigue por que me estanque aqui
