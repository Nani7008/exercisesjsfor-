// let arrays = []
// function createArray (n) {
// for (let i=0; i<=n; i++ ) {
//     arrays[i]=i;
// }
// console.log (arrays)
// }

// createArray(100)
// 2. juft raqamini toping

// let arrays = []
// function createArray (n) {
// for (let i=0; i<=n; i++ ) 
// if (i%2==0)
// {
//     arrays.push(i) 
// }
// console.log (arrays)
// }

// createArray(100)



// let arr = [5, 2, 6, 1, 34, 4, 7];
// let max = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max ) {
//       max = arr[i];
//     }
//   }
//   console.log(max);


//   let arr = [5, 2, 6, 1, 8, 4, 7];
// let min = arr[0]
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < min ) {
//       min = arr[i];
//     }
//   }
//   console.log(min);




// let arr = [6, 25, 91, 23, 72, 9, 18, 6];

// let sum = 0
// for (var i = 0; i < arr.length; i++) {
//     {
//         sum += arr[i];
//     }
// }
// console.log(sum / arr.length);






// function findN(n) {

//     let arr = [6, 25, 91, 23, 72, 9, 18, 6];
//     let isFound = false
//     for (let i = 0; i < arr.length; i++)
//         if (arr[i] === n) {
//             console.log(arr[i]);
//             isFound = true;
//         }

//         return isFound;
//     }


//     alert(findN(23));



// function findIndex(arr, n) {

//     if (n < 0 || n > arr.length - 1) {
//         console.log(0);
//     }
//     else {
//         console.log(arr[n]);
//     }
// }

// let result = findIndex([6, 25, 91, 23, 72, 9, 18, 6], 1);


//     let arr = [6, 25, 91, 23, 72, 9, 18];
//     arr.push(13)
//     console.log(arr)


//     function pushLastN (arr, n) {
//         arr[arr.length] = n;
//         return arr

//     }

//     let result = pushLastN([6, 25, 91, 23, 72, 9, 18, 6], 8);
//     console.log(result);


// function unShiftN(arr, n) {
//     let newArr = [];
//     newArr[0] = n;

//     for (let i = 1; i < arr.length + 1; i++) {
//         newArr[i] = arr[i - 1];
//     }
//     return newArr;
// }
// let result = unShiftN([10, 20, 5, 7, 3, 2,], 8);
// // console.log(result);


// function joylashtir_va_chiqar(array, a, b) {
//     // Yordamchi funksiya
//     function joylashtir(array, a, b) {
//         array[a] = b;
//     }

//     // Yordamchi funksiyaning chaqirilishi
//     joylashtir(array, a, b);

//     // Yangilangan massivni chiqarish
//     console.log(array);
// }

// function olibTashlash(array, n) {
//     if (n < array.length) {
//         let element = array.splice(n, 1)[0];
//         console.log(`${n}-chi indeksdagi element: ${element}`);
//         console.log("Yangi massiv:", array);
//     } else {
//         console.log("Kechirasiz, berilgan indeks massivning uzunligidan kichik yoki teng.");
//     }
// }

// let array = [4, 5, 6, 7];  // Massiv
// let n = 2;  // Olib tashlanadigan indeks

// olibTashlash(array, n);



// function arrayreverse(array) {
//     array = array.reverse();
//     console.log(array);
// }

// let array = [1, 2, 3, 4];  
// arrayreverse(array);


// function countN(n, array) {
//     let count=0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === n) {
//             count++;
//         }
//         return count;
//     }

// }
// const n = 4;
// const array = [2, 4, 6, 4];
// const result = countN(n, array);
// console.log(`${n} ta ${result} raqami bor`);

