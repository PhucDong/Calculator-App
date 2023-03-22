const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".number-btn");

// This function deals with numbers
const addNumber = (num) => { 

    if (operator === null) {
        num1 += `${num}`;
        console.log(`Number 1: ${num1}`);
        display.textContent = num1;
    } else {
        num2 += `${num}`;
        console.log(`Number 2: ${num2}`);
        display.textContent = num2;
    }
};

numButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        addNumber(btn.textContent)
    });
});

let num1 = "";
let num2 = "";
let operator = null;
let result = 0;

const add = () => {
    operator = "add";
    console.log(operator);
    display.textContent = "";
};

const subtract = () => {
    operator = "subtract";
    console.log(operator);
    display.textContent = "";
};

const multiply = () => {
    operator = "multiply";
    console.log(operator);
    display.textContent = "";
};

const divide = () => {
    operator = "divide";
    console.log(operator);
    display.textContent = "";
};

const equal = () => {
    // check value of each operator
    // display result associating with that operator
    switch(operator) {
        case "add":
            result = Number(num1) + Number(num2);
            display.textContent = `${result}`;
            break;
        case "subtract":
            result = Number(num1) - Number(num2); 
            display.textContent = `${result}`;
            break;
        case "multiply":
            result = Number(num1) * Number(num2);
            display.textContent = `${result}`;
            break;
        case "divide":
            result = Number(num1) / Number(num2);
            display.textContent = `${result}`;
            break;
        default:
            break;
    }
}

const operatorButtons = document.querySelectorAll(".operator-btn");
operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        switch(btn.textContent) {
            case "+":
                add();
                break;
            case "-":
                subtract();
                break;
            case "X":
                multiply();
                break;
            case "/":
                divide();
                break;
            case "=":
                equal();
                break;
            default:
                break;
        }    
    });
});

const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", () => {
    reset();
});

const reset = () => {
    num1 = "";
    num2 = "";
    operator = null;
    display.textContent = "";
};

// deal with decimal point
const decimalPointButton = document.querySelector(".decimalPoint-btn");

const decimalPoint = () => { 
    // ko cho dấu chấm ở đầu tiên
    // mỗi number chỉ có 1 dấu chấm
    
    if (operator === null) {
        if (num1.includes(".") === false) {
            num1 += ".";
        }
    } else {
        if (num2.includes(".") === false) {
            num2 += ".";
        }
    }
};

decimalPointButton.addEventListener("click", () => {decimalPoint()});

const delButton = document.querySelector(".delete-btn");

const deleteNum = () => {
    if (operator === null) {
        num1 = "";
        display.textContent = "";
    } else {
        num2 = "";
        display.textContent = "";
    }
};

delButton.addEventListener("click", () => {deleteNum()});