const calculadora = document.querySelector(".calculadora");
const teclas = calculadora.querySelector(".calculadora__teclas");
const display = document.querySelector(".calculadora__tela");
let operadorAnterior = "";

teclas.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const tecla = e.target;
    const action = tecla.dataset.action;
    if (!action) {
      console.log("Tecla numérica");
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
      console.log("Calcular");
    }

    if (action === "backspace") {
      console.log('Limpar tela')
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

// Funcão de adicionar decimal

    if (action === "decimal") {
      if (displayedNum.includes('.') && !/[-/*+]/g.test(displayedNum)) {
        return
      } else { 
      if (displayedNum.split(/[-+*/]/).pop().includes('.')) {
          return
        } else {
          display.textContent = displayedNum + teclaConteudo;
          operadorAnterior = teclaConteudo;
          console.log(operadorAnterior);
          }
        }
    }

// Funcão de adicionar operadores adição e subtração

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

// Funcão de adicionar operador de multiplicação 

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

// Funcão de adicionar operador de divisão
    
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

// Funcão de adicionar backspace

    if (action === "backspace") {
      console.log('OK');
      console.log(display.textContent.length === 1);
      if (display.textContent === '0') {
        return;
      }
      if (display.textContent.length === 1) {
        display.textContent = '0';
      } else {
        display.textContent =  displayedNum.substring(0, displayedNum.length-1);
      }
      
// Funcão de zerar tela

    }
    if (action === "clear") {
      display.textContent = "0";
    }

// Função de calcular tela  
    
    if (action === "calcular") {
      display.textContent = eval(display.textContent);
    }
  }
});
