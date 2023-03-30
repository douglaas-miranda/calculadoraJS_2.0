const calculadora = document.querySelector('.calculadora');
const teclas = calculadora.querySelector('.calculadora__teclas');

teclas.addEventListener('click', e => {
    if(e.target.matches('button')) {
        console.log('OK');
        const tecla = e.target;
        const action = tecla.dataset.action;
        if (!action) {
            console.log('tecla numérica');
        }
    }
})