// let skills = ["html", "css", "js", "scss", "bootstrap", "tailwind", "javascript" ]
// skills.forEach (function(value, index, array){
//     console.log((`${index+1}. ${value}`));
// });




// skills.forEach ((value, index, array)=>{
//     console.log((`${index+1}. ${value}`));
// });



																		// HOMEWORK

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

// ====================================================================================================================================

// Array2. n ta elementdan tashkil topgan arr nomli massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.
// Input: arr = [1,23,42,14,21,22], R = 16
// Output: 14

// ====================================================================================================================================

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

// ====================================================================================================================================

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


// ====================================================================================================================================

// Array6. n ta butun sonlardan iborat arr nomli massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin
// Input: arr=[10,2,34,5,13,63,16], k = 3
// 	Output: [30,6,102,15,39,189,48]

// function increasingByK (arr, k) {
// 	for (let i = 0; i <arr.length; i++)
// 	arr[i] *= k
// return arr;
// }
// let array = [10,2,34,5,13,63,16];
// let k = 3;
// console.log(increasingByK(array, k));


// ====================================================================================================================================

// Array7. n ta butun sonlardan iborat arr nomli massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi
//  programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.
// Input: [10,2,34,5,13,63,16]
// 	Output: [10,2,0,0,0,63,16]
// 


// ====================================================================================================================================

// Array 8 n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsin.
// Input: [10,2,2,5,13,63,63,16,5]
// Output: [10,2,5,13,63,16,5]
// function removeDuplicates(arr) {
//     let uniqueArr = [...new Set(arr)]; 
//     return uniqueArr;
// }

// let arr = [10, 2, 2, 5, 13, 63, 63, 16, 5];
// console.log(removeDuplicates(arr));


// ====================================================================================================================================

//Array9 n ta elementdan tashkil topgan arr nomli massiv berilgan. Dastlab massiv elementlari orasidan juft elementlarni indekslari o'sish tartibida elementlarni chiqaruvchi,
//  keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida elementlarni chiqaruvchi programma tuzilsin.
// Input:[ 4, 5, 7, 8, 6, 9]
// Output: 4 8 6 9 7 5


// ====================================================================================================================================


// Array10. n ta elementdan iborat arr nomli massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
// Input: [7, 4, 9, 2, 3, 1, 5]
// Output:(Max: 9,Min: 1) [7, 4, 1, 2, 3, 9, 5]

// function findMinMaxAndSwap(arr) {
// 	let min = Math.min(...arr);
//     let max = Math.max(...arr);
// 	let minIndex = arr.indexOf(min);
// 	let maxIndex = arr.indexOf(max);
// 	[arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
// 	return { min, max };
// }
// let arr = [7, 4, 9, 2, 3, 1, 5];
// let { min, max } = findMinMaxAndSwap(arr);
// console.log(`(MaxNumber: ${max}, MinNumber: ${min})`, arr);


// ====================================================================================================================================