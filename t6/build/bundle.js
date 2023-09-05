'use strict';

// Test the function with arrays of different types
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ['apple', 'banana', 'cherry', 'date'];
const mixedArray = [true, 42, 'hello', false];
// Use console log to print the result. Desired result:
// Reversed Array of Numbers: [ 5, 4, 3, 2, 1 ]
// Reversed Array of Strings: [ 'date', 'cherry', 'banana', 'apple' ]
// Reversed Mixed Array: [ false, 'hello', 42, true ]
function reverseArray(array) {
    return array.reverse();
}
console.log('Reversed Array of Numbers:', reverseArray(numberArray));
console.log('Reversed Array of Strings:', reverseArray(stringArray));
console.log('Reversed Mixed Array:', reverseArray(mixedArray));
