/*
write a function that checks if two provided strings are anagrams of each other
*/

// helper function tp build the object to store the data
const buildCharObject = (str) => {
    const charObj = {}
    for(let char of str.replace(/[^\w]/g).toLowerCase()){
        // if the object has already a key value pair
        // increase the value by 1, otherwise add
        // equal to the value being looped over,
        // the letter being looped over as key and 1 as its value
        charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
}

const anagram = (strA, strB) => {
    // build object that holds strA
    const aCharObject = buildCharObject(strA)
    // build object that holds strB
    const bCharObject = buildCharObject(strB)

    // compare number of keys in the two objects
    // (anagrams must have the same number of letters)
    if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length){
        return false
    }

    // Now we can compare the two objects to see if both
    // have the same letters in the same amount
    for(let char in aCharObject) {
        if(aCharObject[char] !== bCharObject[char]){
            return false
        }
    }

    // if both the above checks succeed
    // you have an anagram
    return true 

}