// let array = ["Ali",27,null,undefined];
// console.log(array); // show simple array

// let array1 = ["a",array];
// console.log(array1); // show array 1 val and if we pass array then it also show this too.

// let array2 = array1;
// console.log(array2); // show array 2 val and if we equal array1 then it also show both same

// array1[1] = "value"; // it add value to index 1 of array 1
// console.log(array1);
// // array methods.

// array.shift();
// console.log(array);

// array.pop();
// console.log(array);

// array.indexOf("null");


// array methods

let array  = [1,2,3,4,5]; // initialize the array
let b = array.toString(); // save array to a variable and conver array into string
console.log(b , typeof b); // return type of array and show converted array into string

let c = array.join(" and "); // add and word in between every array instead of comma
console.log(c );

array.pop(); // delete last index or last value in array
console.log(array);
// if u want to see which value is deleted so create a variable then store that return value in it.
let f = array.pop();  // create a variable then apply pop and the value that delete or out will see on that variable
console.log(array, f);

let g = array.push(21); // add element in last of array and return lenght of array
console.log(array, g);
let s = array.push(22); // add 22 in last index of array and also return length of array
console.log(array , s);

array.shift(); // del or remove first element or first index value of an array and return updated array
console.log(array);
// to see what is deleted so we create a variable and then see on log
let r = array.shift();
console.log(array, r);

// to add something in first of array we use unshift method

let q = array.unshift(96);
console.log(array, q);



