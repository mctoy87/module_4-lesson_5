"use strict";

const changeStrict = (str) => {
  let newStr = '';
  console.log(newStr);
  


  for (let i = str.length - 1; i >= 0; i-- ) {
    newStr += str[i]
  }
  return newStr;
}

console.log (changeStrict ('Привет мир'));
