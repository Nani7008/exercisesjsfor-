// let skills = ["html", "css", "js", "scss", "bootstrap", "tailwind", "javascript" ]
// skills.forEach (function(value, index, array){
//     console.log((`${index+1}. ${value}`));
// });




// skills.forEach ((value, index, array)=>{
//     console.log((`${index+1}. ${value}`));
// });



// homework
// Array1. n ta elementdan tashkil topgan arr nomli massiv berilgan, massivdagi numberlarni yig’indisini toping.
// nput: [10,”salom”,21,4,1,12,true]
// 	Output: 48

// function sumOfNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// let n = [10, "salom", 21, 4, 1, 12, true];
// console.log(sumOfNumbers(n));


// Array2. n ta elementdan tashkil topgan arr nomli massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.
// Input: arr = [1,23,42,14,21,22], R = 16
// Output: 14

// Array3. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massivni juft indeksli elementlari sonini toping
// Input: [10,”salom”,21,4,1,12,true]
// Output: 4
// function findingEvenNumbers(arr) {
//     let n = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === `number` && arr[i]%2 === 0) {
//             n++;
//     }

// }
// return n;  
// }
// let array = [10, "salom",21,4,1,12,true];
// console.log(findingEvenNumbers(array));

// Array4. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indekslarini chiqaruvchi programma tuzilsin
// 	Input: [10,21,4,1,12,21]
// 	Output: 1,5
// function findDuplicateIndices(arr) {
//     const indices = {};

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (indices[element] !== undefined) {
//             return `${indices[element]},${i}`;
//         }
//         indices[element] = i;
//     }

//     return "No duplicate indices found.";
// }

// const array4 = [10, 21, 4, 1, 12, 21];
// console.log(findDuplicateIndices(array4));

// Array5. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massivni toq elementlari sonini toping
	// Input: [1,23,42,14,21,22]
	// Output: 3

// function findingOddNumbers(arr) {
// n=0
//     for (let i = 0; i < arr.length; i++) {
// if (arr[i]%2===1) 
// n++    
    
// }
// return n
// }
// let array = [1,23,42,14,21,22]
// console.log(findingOddNumbers(array));