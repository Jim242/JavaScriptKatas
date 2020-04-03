/* 
Write a JS program to replace every
character in a given string with the character
following it in the alphabet
*/

// String.FromCHarCode
// charCodeAt

const moveCharForward = (str) => 
    str.split('') // split the string into an array
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1)) // mutate the array, return the number and then return back into a string
    .join(''); // join all back as a string

console.log(moveCharForward('abcd'));