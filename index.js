// function encodeToRot13(str) {
//   let newStr = '';
//   for (let i = 0; i <= str.length; i += 1) {
//     const code = str.charCodeAt(i);
//     if (code < 78 && code >= 65 || (code < 110 && code > 90)) {
//       newStr += String.fromCharCode(code + 13);
//     } else if (code < 65 || code > 122 ) {
//       newStr += String.fromCharCode(code);
//     } else {
//       newStr += String.fromCharCode(code - 13);
//     }
//   }
//   return newStr;
// }

// console.log(encodeToRot13('Why did the chicken cross the road?'))

// function isString(value) {
//   if (typeof value === 'string') {
//     return true;
//   }
//   return false
// }

// function removeFirstOccurrences(str, value) {
//   return str.replace(value, '');
// // }
// console.log(removeFirstOccurrences('To be or not to be', 'not'))

// function getDistanceBetweenPoints(x1, y1, x2, y2) {
//   return Math.sqrt((Math.abs(x1) + Math.abs(x2)) ** 2 + Math.abs(y1 + y2) ** 2)
// }

// console.log(getDistanceBetweenPoints(0, 0, 1, 0))

// function getAngleBetweenVectors(x1, y1, x2, y2) {
//   return Math.acos(
//     (x1 * x2 + y1 * y2)
//       / (Math.sqrt(x1 ** 2 + y1 ** 2) * Math.sqrt(x2 ** 2 + y2 ** 2)),
//   );
// }

/**
 * Returns every second item from the specified array:
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 *
 * function getSecondItems(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}
 */

/**
 * Returns the 3 largest numbers from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 *
 * function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3)
}
 */

/**
 * Returns the number of positive numbers from specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 *
 * function getPositivesCount(arr) {
  let count = 0
  arr.map((el) => {
    if (el > 0 && typeof el !== 'string'){
      count++
    }
  })
  return count
}
 */

/**
 * Returns the sum of all items in the specified array of numbers
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 *
 * function getItemsSum(arr) {
  const result = arr.reduce((acc, el) => acc + el, 0)
  return result
}
 */

/**
 * Returns the number of all falsy value in the specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 *
 * function getFalsyValuesCount(arr) {
  const result = arr.filter((el) => !!el === false);
  return result.length;
}
 */

/**
 * Returns a number of all occurrences of the specified item in an array
 *
 * @param {array} arr
 * @param {any} item
 * @return {number}
 *
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2
 *    [ true, 0, 1, 'true' ], true => 1
 *
 * function findAllOccurrences(arr, item) {
  const result = arr.filter((el) => el === item);
  return result.length;
}
 */

/**
 * Concatenates all elements from specified array into single string with ',' delimiter
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 *
 * function toStringList(arr) {
  return arr.join(',')
}
 */

/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 *
 * function sortCitiesArray(arr) {
  const temp = arr.sort((a , b) => a.city.localeCompare(b.city))
  const result = temp.sort((a , b) => a.country.localeCompare(b.country))
  return result
}
 */
/**
 * Sorts digit names
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */


const arr = [ 'nine','one' ]
function sortDigitNamesByNumericOrder(arr) {
  let acc = []
  let result = []
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
for (let el of arr) {
  acc.push(obj[el])
}
const arrSort = acc.sort((a, b) => a - b)
for (let el of arrSort) {
  result.push(Object.keys(obj)[el])
}
return result
}

console.log(sortDigitNamesByNumericOrder(arr));

// const obj = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eigth: 8,
//   nine: 9,
// };

// console.log(Object.keys(obj)[5])
