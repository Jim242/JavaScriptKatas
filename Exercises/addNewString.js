/* 
Write a JS program to create a new string 
adding 'New!' in the front of a given string.
If the given string begins with 'New!' already
then return the original string.
*/

const addNew = (str) => 
    str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('New! Offers'))
console.log(addNew('Offers'))