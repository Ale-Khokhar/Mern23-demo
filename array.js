let array = ["Ali",27,null,undefined];
console.log(array); // show simple array

let array1 = ["a",array];
console.log(array1); // show array 1 val and if we pass array then it also show this too.

let array2 = array1;
console.log(array2); // show array 2 val and if we equal array1 then it also show both same

array1[1] = "value"; // it add value to index 1 of array 1
console.log(array1);
// array methods.

array.shift();
console.log(array);

array.pop();
console.log(array);

array.indexOf("null");
