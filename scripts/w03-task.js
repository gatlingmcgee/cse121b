/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
    function add (number1, number2) {
        const sum = parseInt(number1) + parseInt(number2)
        return sum 
    }

function addNumbers() {
    const firstNumber = document.querySelector("#add1").value
    const secondNumber = document.querySelector("#add2").value
    const sum = add(firstNumber, secondNumber)
    document.querySelector("#sum").value = sum
    }

document.querySelector("#addNumbers").addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
    function subtract (number1, number2) {
        const sum = parseInt(number1) - parseInt(number2)
        return sum 
    }

function subtractNumbers() {
    const firstNumber = document.querySelector("#subtract1").value
    const secondNumber = document.querySelector("#subtract2").value
    const sum = subtract(firstNumber, secondNumber)
    document.querySelector("#difference").value = sum
    }

document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */
    //function multiply (number1, number2) {
        const multiply = (number1, number2) => {
        return number1 * number2
    }        
    //   const sum = parseInt(number1) * parseInt(number2)
    //   return sum 
    //}

function multiplyNumbers() {
    const firstNumber = document.querySelector("#factor1").value
    const secondNumber = document.querySelector("#factor2").value
    const sum = multiply(firstNumber, secondNumber)
    document.querySelector("#product").value = sum
    }

document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
    //function divide (dividend, divisor) {
        const divide = (dividend, divisor) => {
        return dividend / divisor
    }        
    //   const sum = parseInt(dividend) / parseInt(divisor)
    //   return sum 
    //}

function divideNumbers() {
    const dividend = document.querySelector("#dividend").value
    const divisor = document.querySelector("#divisor").value
    const sum = divide(dividend, divisor)
    document.querySelector("#quotient").value = sum
    }

document.querySelector("#divideNumbers").addEventListener('click', divideNumbers)

/* Decision Structure */
const today = new Date();
let currentYear = "";
currentYear = today.getFullYear();

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").value = numbersArray
document.querySelector("#array").innerHTML = numbersArray

/* Output Odds Only Array */
// let odds = numbersArray.filter( number => number % 2);
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
// let evens = numbersArray.filter(n %2 ==0);
// document.querySelector("#array").value = evens
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
// numbersArray.reduce((sum, number) => sum + number);
const initialnumber = 0;
const sumWithInitial = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialnumber);
document.querySelector("#sumOfArray").innerHTML = sumWithInitial

/* Output Multiplied by 2 Array */
// numbersArray.map(number => number * 2);
// document.querySelector("#multiplied").innerHTML = numbersArray
const map = numbersArray.map((sumWithInitial) => sumWithInitial * 2);
document.querySelector("#multiplied").innerHTML = map

/* Output Sum of Multiplied by 2 Array */
const sumOfArraysTimes2 = sumWithInitial * 2
document.querySelector("#sumOfMultiplied").innerHTML = sumOfArraysTimes2