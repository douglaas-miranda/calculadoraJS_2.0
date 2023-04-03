const calculadora = document.querySelector(".calculadora");
const teclas = calculadora.querySelector(".calculadora__teclas");
const display = document.querySelector(".calculadora__tela");
let operadorAnterior = "";

teclas.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const tecla = e.target;
    const action = tecla.dataset.action;
    if (!action) {
      console.log("tecla numérica");
    }
    if (
      action === "add" ||
      action === "sub" ||
      action === "mult" ||
      action === "div"
    ) {
      console.log("Operador");
    }
    if (action === "decimal") {
      console.log("Decimal");
    }
    if (action === "clear") {
      console.log("Limpar");
    }
    if (action === "calcular") {
      console.log("calcular");
    }
  }
});

// Criando função de escrever na tela

teclas.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const tecla = e.target;
    const action = tecla.dataset.action;
    const teclaConteudo = tecla.textContent;
    const displayedNum = display.textContent;
    let resultado = "";
    let operadorAnterior = "";
    let valorAnterior = "";
    let ultimoDigito = "";
    const operadores = /[-/*+]/g;
    const numeros = /[1234567890]/g;

    if (!action) {
      if (displayedNum === "0" || resultado !== "") {
        display.textContent = teclaConteudo;
        resultado = "";
      } else {
        display.textContent = displayedNum + teclaConteudo;
      }
      operadorAnterior = "";
    }

    if (action === "decimal") {
      display.textContent = displayedNum + teclaConteudo;
      operadorAnterior = teclaConteudo;
      console.log(operadorAnterior);
    }
    if (action === "add" || action === "sub") {
      valorAnterior = displayedNum;
      ultimoDigito = valorAnterior.slice(-1);
      console.log(ultimoDigito);
      const validador = numeros.test(ultimoDigito);
      console.log(validador);
      if (validador) {
        display.textContent = displayedNum + teclaConteudo;
      }
    }

    if (action === "mult") {
      valorAnterior = displayedNum;
      ultimoDigito = valorAnterior.slice(-1);
      console.log(ultimoDigito);
      const validador = numeros.test(ultimoDigito);
      console.log(validador);
      if (validador) {
        display.textContent = displayedNum + '*';
      }
    }
    if (action === "div") {
      valorAnterior = displayedNum;
      ultimoDigito = valorAnterior.slice(-1);
      console.log(ultimoDigito);
      const validador = numeros.test(ultimoDigito);
      console.log(validador);
      if (validador) {
        display.textContent = displayedNum + '/';
      }
    }
    if (action === "clear") {
      display.textContent = "0";
    }
    if (action === "calcular") {
      display.textContent = eval(display.textContent);
    }
  }
});
