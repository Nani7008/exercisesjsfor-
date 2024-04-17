
//1. TODO  Salom berish
// function hello(name){ 
//     if(name){ 
//         return "Hello, " + name + "!"; 
//     }else{ 
//         return "Hello Unkown!"; 
//     } 
// } 
// console.log(hello());



// 2. 2 ta raqam qaysi biri katta

// function bigger(a,b){
//   if (typeof a == "number" && typeof b == "number"){
//     if(a>b){
//         return a + " soni katta" ;
//     }else if (a<b){
//         return b + " soni katta" ;
//     }
//     else {
//         return a + " va " + b + " lar teng" ;
//     }
//   }
// else {
//     return "Please enter a number"
// }
// }
    
 
// console.log(bigger(7,7));



// let a = +prompt ('a sonini kiriting')
// let b = +prompt ('b sonini kriting')

// function bigger(a,b){
//     if(a>b){
//         return a + " soni katta" ;
//     }else if (a<b){
//         return b + " soni katta" ;
//     }
//     else {
//         return a + " va " + b + " lar teng" ;
//     }
    
//  }
// alert(bigger(a,b));


// TODO: juft yoki toq

// function juftToq(a){
//     if (a%2==0) {
// return a + " juft"
//     }
//     else  {
//         return a + " toq" 
//     }
//  }
 
//  console.log(juftToq(113));

// TODO: 1. Function to Convert Uppercase to Lowercase:
// Write a function that takes a string as an argument and returns the string with all uppercase letters converted to lowercase.


// function convertLowerCase(info) {
//     let string = info.toLowerCase();
//     return string;
// }

// console.log(convertLowerCase('NajottaliM'));



// checking string or not, and wether it equal to uppercase


// function convertLowerCase(info) {
//     if (typeof info ===`string`) {
//     if (info === info.toUpperCase()) {
//     return info.toLowerCase();
//     }
//     else {
//         return "All letters must be uppercase"
//     }
// }
// else {
//   return  "Please use only letters"
// }
// }

// console.log(convertLowerCase("NAJOTTALIM"));


// TODO: 2. Function to Calculate the Factorial of a Number: 
// Write a function that takes a non-negative integer as an argument and returns the factorial of that number.


// function factorialNumber(n) {
  
//     if (n < 0) {
//         return "Please use a positive number"
//     }

//     if (n === 0) {
//         return 1;
//     }

//     return n * factorialNumber(n - 1);
// }
// console.log(factorialNumber(8));

// TODO: 3. 
// 3. Function to Convert Celsius to Fahrenheit:
// Write a function that takes a temperature in Celsius as an argument and returns the equivalent temperature in Fahrenheit.


// function celToF (c) {
//     return (c*1.8)+32
// }
// console.log(celToF(50));

// // Function to Convert Fahrenheit: to Celsius
// function fToCel (f) {
//     return (f-32)/1.8
// }
// console.log(fToCel(100));
