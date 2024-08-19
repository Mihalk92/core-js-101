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

// console.log(encodeToRot13('uryyb\x00'))

function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  return false
}

console.log(isString('test'))
