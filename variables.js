// constant which is a blockscope 

const a = 2;
console.log(a); // 2
{
    const a = 3;
    console.log(a); //3
}
console.log(a); // 2

// let which is also a blockscope but reassign and redeclare

let b = 5;
console.log(b); // 5
{
    let b = 6;
    console.log(b); // 6
}
console.log(b); //5

// var which is global scope and can use it anywhere

var c = 25; // 25
console.log(c);
{
    var c = 30;
    console.log(c); //30
}
console.log(c); // 30