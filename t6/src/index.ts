// Test the function with arrays of different types
const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['apple', 'banana', 'cherry', 'date'];
const mixedArray: (string | number | boolean)[] = [true, 42, 'hello', false];

// Use console log to print the result. Desired result:
// Reversed Array of Numbers: [ 5, 4, 3, 2, 1 ]
// Reversed Array of Strings: [ 'date', 'cherry', 'banana', 'apple' ]
// Reversed Mixed Array: [ false, 'hello', 42, true ]
function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

console.log('Reversed Array of Numbers:', reverseArray<number>(numberArray));
console.log('Reversed Array of Strings:', reverseArray<string>(stringArray));
console.log('Reversed Mixed Array:', reverseArray(mixedArray));
