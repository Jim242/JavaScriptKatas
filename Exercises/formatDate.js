/* 
Write a JS program to to get the current date.
Expected output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const formatDate = (date = new Date()) => { // create a new date right now
    const days = date.getDate() + 1; //add 1 as zero index
    const months = date.getMonth() + 1; //add 1 as zero index
    const years = date.getFullYear();

    return `${days}/${months}/${years}`
} 

console.log(formatDate());

