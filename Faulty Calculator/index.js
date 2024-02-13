// Declare variables
let number1, number2, operator, random;

// Take input from the user
number1 = prompt("Enter the first number: ");
operator = prompt("Enter the operator: ");
number2= prompt("Enter the second number: ");

// Convert 'number1' and 'number2' from string to number 
number1 = parseInt(number1);
number2 = parseInt(number2);

// Generate a random number and set it's range form 0 to 100
random = Math.random() * 100;

// Create a function that behaves as a calculator
function calculator(number1, number2, operator) {
    if (operator === '+') {
        if (random < 10) {
            console.log(number1 - number2);
        }

        else {
            console.log(number1 + number2);
        }
    }

    else if (operator === '-') {
        if (random < 10) {
            console.log(number1 / number2);
        }

        else {
            console.log(number1 - number2);
        }
    }

    else if (operator === '*') {
        if (random < 10) {
            console.log(number1 + number2);
        }

        else {
            console.log(number1 * number2);
        }
    }

    else if (operator === '/') {
        if (random < 10) {
            console.log(number1 ** number2);
        }

        else {
            console.log(number1 / number2);
        }
    }

    else {
        console.log("Enter a valid operator.");
    }
}

// Call the function
calculator(number1, number2, operator);