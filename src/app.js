function generarExcusa() {
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  let quien = Math.random();
  const sujeto = Math.floor(quien * who.length);

  const action = ["ate", "peed", "crushed", "broke"];
  let accion = Math.random();
  const accionQueHace = Math.floor(accion * action.length);

  const what = ["my homework", "my phone", "the car"];
  let que = Math.random();
  const queHace = Math.floor(que * what.length);

  const when = [
    "before the class.",
    "when I was sleeping.",
    "while I was exercising.",
    "during my lunch.",
    "while I was praying."
  ];
  let cuando = Math.random();
  const cuandoLoHace = Math.floor(cuando * when.length);
  return (
    who[sujeto] + action[accionQueHace] + what[queHace] + when[cuandoLoHace]
  );
}

window.addEventListener("load", () => {
  const excusa = generarExcusa();

  document.body.innerHTML = `<h1>${excusa}</h1>`;
});
