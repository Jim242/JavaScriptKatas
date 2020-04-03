/*
console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
logs fizz instead of the number for multiples of 3
logs buzz instead of the number for multiples of 5
logs fizzbuzz for numbers that are multiples of both 3 and 5
*/

// modulo or remainder operator (%)

const fizzBuzz = (num) => {
    for(let i = 1; i <= num; i++){
        //check if multiple of 3 and 5 
        if(i % 3 === 0 && i % 5 === 5){
            console.log('fizzbuzz')
        }
        // check if multiple of 3 
        else if(i % 3 === 0){
            console.log('fizz')
        }
        // check if multiple of 5 
        else if(i % 5 === 0){
            console.log('buzz')
        }
        // default
        else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz(5))