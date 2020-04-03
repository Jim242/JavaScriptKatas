/*
Given a string, return true if the string is a palindrome and false if it isn’t
*/

const palindrome = (str) => {
    // turn string to lowercase
    str = str.toLowerCase()
    // reverse input string and return the result of comparison
    return str === str.split('').reverse().join('')
}

console.log(palindrome('jim'))
console.log(palindrome('racecar'))