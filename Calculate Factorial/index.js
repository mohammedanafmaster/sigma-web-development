// Declare variable and take input from the user
let input = prompt("Enter a number: ");

// Create an empty array
let array = [];

// Insert elements into the array using for loop
for (let i = input ; i>=1 ; i--) {
    array.push(i);
}

// Find the factorial using array.reduce()
const factorial = (item1, item2) => {
    return item1 * item2;
}

// Print the output and check if the input is 0. If yes, print 1 because the factorial of 0 is 1
result = input > 0 ? console.log(array.reduce(factorial)) : console.log(1);