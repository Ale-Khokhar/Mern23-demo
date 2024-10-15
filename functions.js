
// Simple function
// function name(){
//     console.log("Ali");
// }
    
// name(); // function calling

// function declariation
info("Ali",7); // can be call in last or first doesn't matter
function info (name,age){
console.log(name,age);
}


// function expression
let a = function (){
    let b = 2;
    let c = 3;
    let d = b + c;
    console.log("Value of b + C =",d);
}
a();

//IIFE function

// (function s (p1){
//     console.log("the value is",p1);
// })(s);

// pass by copy and pass my reference and higher order function

// pass by copy

let f = 10;
let g = f;
console.log(f);
console.log(g);

f = 20;
console.log(f);


