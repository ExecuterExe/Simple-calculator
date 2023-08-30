const calcInput = document.querySelector('.calc-screen__input');
const calcBtn = document.querySelectorAll('.calc-btn');
const calcNumb = document.querySelectorAll('.calc-btn_numb');
const calcOprt = document.querySelectorAll('.calc-btn_oprt')
const calcOperations = {
    'plus': '+',
    'minus': '-',
    'multiply': '*',
    'divide': '/',
    'delete-last-element': deleteLastElement,
    'all-clear': deleteAllElements
}

calcBtn.forEach(btn =>
    btn.addEventListener('click', interactCalculator)
);


function interactCalculator(e) {
    let btn = e.target;

    // Adding numbers to calcInput
    if (btn.classList.contains('calc-btn_numb')) {
        calcInput.textContent += btn.textContent
    }

    // Adding operations to calcInput
    if (btn.classList.contains('calc-btn_oprt')) {
        
    }

    // Adding deleting all
}

function deleteLastElement() {
    console.log(1);
};
function deleteAllElements() {
    console.log(1);
};