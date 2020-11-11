// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let sign = Math.sign(n)
  let absVal = Math.abs(n)
  let numArr = absVal.toString().split('').reverse()

  if (numArr.findIndex((item) => item > "0") === -1) {
    return parseInt(numArr.join(''))
  } else {
  let splicedArr = numArr.splice(numArr.findIndex(item => item > '0')).join('')

    return (parseInt(splicedArr) * sign)
  }
}
//My solution
 /* function reverseInt(n) {
     let sign = Math.sign(n);
     let absVal = Math.abs(n);
     let numArr = absVal.toString().split("").reverse();

     if (numArr.findIndex((item) => item > "0") === -1) {
         return parseInt(numArr.join(""));
     } else {
         let splicedArr = numArr
             .splice(numArr.findIndex((item) => item > "0"))
             .join("");
         console.log(splicedArr);

         return parseInt(splicedArr) * sign;
     }
 } */
module.exports = reverseInt;
