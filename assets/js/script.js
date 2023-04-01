const calculadora = document.querySelector(".calculadora");
const teclas = calculadora.querySelector(".calculadora__teclas");

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

const display = document.querySelector(".calculadora__tela");

teclas.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const tecla = e.target;
    const action = tecla.dataset.action;
    const teclaConteudo = tecla.textContent;
    const displayedNum = display.textContent;
    if (!action) {
      if (displayedNum === "0") {
        display.textContent = teclaConteudo;
      }
    }
    if (!action) {
      if (displayedNum === "0") {
        display.textContent = teclaConteudo;
      } else {
        display.textContent = displayedNum + teclaConteudo;
      }
    }
    if (action === "decimal") {
      display.textContent = displayedNum + ".";
    }
    if (action === "add") {
          display.textContent = displayedNum + "+";
        }
    if (action === "sub") {
      display.textContent = displayedNum + "-";
    }
    if (action === "mult") {
      display.textContent = displayedNum + "*";
    }
    if (action === "div") {
      display.textContent = displayedNum + "/";
    }
    
  }
});
