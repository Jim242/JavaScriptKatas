/* 
Write a JS program to get the 
extension of a filename
*/

const getFileExtension = (str) => str.slice(
    str.lastIndexOf('.')
);

console.log(getFileExtension('jim.html'));
console.log(getFileExtension('jim.config.html'));