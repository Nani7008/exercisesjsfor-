// Homework

// 1. k va n butun sonlari berilgan n>0. k sonini n marta chiqaruvchi programma tuzilsin

// let k = +prompt('k sonini kirting=');
// let n = +prompt('n sonini kirting=');

// for (let i = 0; i < n; i++) {
//     console.log(k);
// }


// 2.  A va B butun sonlari berilgan (A<B). A va B sonlar orasidagi barcha butun sonlarni (A va B ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi algoritm tuzilsin. (A va B ham chiqarilsin). 

// let a = +prompt('a sonini kiritng=')
// let b = +prompt('b sonini kiriting=')
// let c = 0;

// for (let i = a; i <= b; i++) {
//     console.log(i);
//     c++;
// }
// console.log("sonlar:", c, " ta ");



// 3. A va B butun sonlari berilgan (A<B). A va B sonlar orasidagi barcha butun sonlarni (A va B  kirmaydi) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi algoritm tuzilsin. 

// let a = +prompt('a sonini kiritng=')
// let b = +prompt('b sonini kiriting=')
// let c = 0;

// for (let i = b; i >= a; i--) {
//     console.log(i);
//     c++;
// }

// console.log("sonlar:", c-2, " ta ");


// 4. . Bir kg konfet narxi – haqiqiy son berilgan. 1, 2, ..., 10 kg konfet narxini chiqaruvchi algoritm tuzilsin. 

// let candyPrice=+prompt('konfet narxi=');
// for(let i=1; i<=10; i++) {
//     console.log (`${i}kg konfet = ${i*candyPrice}soms`)
// }


// 5.  Bir kg konfet narxi – haqiqiy son berilgan. 0.1, 0.2, ..., 0.9, 1 kg konfet narxini chiqaruvchi algoritm tuzilsin. 

// let candyPrice= +prompt('konfet narxi=')
// for (let i=1; i<=10; i++) {
//     console.log (`${i/10}kg konfet = ${i/10*candyPrice}soms`)
// }


// 6.  Bir kg konfet narxi – haqiqiy son berilgan. 1.2, 1.4, ..., 2 kg konfet narxini chiqaruvchi algoritm tuzilsin. 

// let candyPrice= +prompt('konfet narxi=')
// for (let i=12; i<=20; i++) {
//     console.log (`${i/10}kg konfet = ${i/10*candyPrice}soms`)
// }


// 7. A va B butun sonlari berilgan (A<B). A dan B gacha bo‗lgan barcha butun sonlar (A va B ham kiradi) yig‗indisini chiqaruvchi algoritm tuzilsin. 

// let a = +prompt('a sonini kiriting=');
// let b = +prompt('b sonini kiritng');
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += i; 
// }

// console.log('a va b b gacha bo`lgan butun sonlar yig`indisi: ', sum); 


// 8. 8. A va B butun sonlari berilgan (A<B). A dan B gacha bo‗lgan barcha butun sonlar (A va B ham kiradi) ko‗paytmasini chiqaruvchi algoritm tuzilsin. 

// let a = +prompt('a sonini kiriting=');
// let b = +prompt('b sonini kiritng');
// let k = 1;


// for (let i = a; i <= b; i++) {
//     k *= i; 
// }

// console.log('a va b b gacha bo`lgan butun sonlar ko`paytmasi: ', k); 

// 9. A va B butun sonlari berilgan (A<B). A dan B gacha bo‗lgan barcha butun sonlar (A va B ham kiradi) kvadratlarining yig‗indisini chiqaruvchi algoritm tuzilsin.

// let a = +prompt('a sonini kiriting=');
// let b = +prompt('b sonini kiritng');
// let k = 0;
// for (let i = a; i <= b; i++) {
//     k += i*i;
 
// }

// console.log('a va b b gacha bo`lgan butun sonlar kvadratining yig`indisi: ', k); 

// .10. N  (N>0) butun son berilgan. Quyidagi yig‗indini hisoblovchi algoritm tuzilsin: S=1+1/2+1/3+ . . . + 1/N. 

// let n = +prompt('n sonini kiriting=');
// let s = 0;
// for (let i =1; i <= n; i++) {
//     s += 1/i;
 
// }

// console.log('yig`indi: ', s); 


// 11. N  (N>0) butun son berilgan. Quyidagi yig‗indini hisoblovchi algoritm tuzilsin: S=N2+ (N+1)2+(N+2)2+ . . . + (2N) 

// let n = +prompt('n sonini kiriting=');
// let s = 0;
// for (let i = n; i <= n * 2; i++) {
//     s += i * i;
 
// }

// console.log('a va b b gacha bo`lgan butun sonlar kvadratining yig`indisi: ', s); 


// N  (N>0) butun son berilgan. Quyidagi ko‗paytmani hisoblovchi algoritm tuzilsin: S=1.1*1.2*1.3* ... (N ta ko‗paytuvchi). 


// let n = +prompt('n sonini kiritng');
// let s = 1;


// for (let i = 1.1; i <=n; i+=0.1) {
//     s *= i; 
// }

// console.log('ko`paytma: ', s); 


