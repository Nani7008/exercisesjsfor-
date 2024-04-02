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


// extra

// IF 

// if1 Butun son berilgan Agar berilgan son musbat bo`lsa 1 ga oshirlsin aks holda o`zgartrilmasin

// let n = +prompt ('son=')

// if (n>1) {
//     alert(n+1);
// }
// else {
//     alert (n)
// } 


// / if2 Butun son berilgan Agar berilgan son musbat bo`lsa 1 ga oshirlsin aks holda 2 ga kamaytrilsin

// let n = +prompt ('son=')

// if (n>1) {
//     alert(n+1);
// }
// else {
//     alert (n-2)
// } 



// / if3 Butun son berilgan Agar berilgan son musbat bo`lsa 1 ga oshirlsin agar manfiy bo`lsa 2 ga kamaytrilsin agar 0 ga teng bo`lsa 10ni ozlashtirsin

// let n = +prompt ('son=')

// if (n>1) {
//     alert(n+1);

// }
// else if (n<0) {
//     alert (n-2);
// } 
// else {
//     alert (10)

// }


// / if4 Uchta butun son berilgan Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzing

// let a = +prompt ('son=')
// let b = +prompt ('son=')
// let c = +prompt ('son=')

// if (0<a && 0<b && 0<c) {

//     alert (3 + "ta")
// }

// else if (0>a && 0<b && 0<c) {
//     alert (2 + "ta")

// }

// else if (0<a && 0>b && 0<c) {
//     alert (2 + "ta")

// }

// else if (0<a && 0<b && 0>c) {
//     alert (2 + "ta")

// }

// else if (0>a && 0>b && 0<c) {
//     alert (1 + "ta")

// }

// else if (0>a && 0<b && 0>c) {
//     alert (1 + "ta")

// }

// else if (0>a && 0<b && 0>c) {
//     alert (1 + "ta")

// }

// else {
//     alert (0)
// }



// if6 Ikkita butun son berilgan Shu sonlarning kattasini aniqlovchi programma tuzilsin

// let a = +prompt ('a=')
// let b = +prompt ('b=')

// if (a>b) {
//  alert (a + " eng katta " )


// }

// else {
//    alert (b + " eng katta " )
// }


// if7 Ikkita butun son berilgan Shu sonlarning kichigini tartib raqamini  aniqlovchi programma tuzilsin


// let a = +prompt ('a=')
// let b = +prompt ('b=')

// if (a<b) {
//  alert (1)

// }

// else {
//    alert (2 )
// }




// if 8
// let a = +prompt ('a=')
// let b = +prompt ('b=')

// if (a>b) {
//  alert (a, b)

// }

// else {
//    alert (b, a )
// // }

// let watterPrice=2100;
// for(let i=10; i<=20; i++) {
//     console.log (`${i/10}L watter = ${i/10*watterPrice}soms`)
// }













// 11. N  (N>0) butun son berilgan. Quyidagi yig‗indini hisoblovchi algoritm tuzilsin: S=N2+ (N+1)2+(N+2)2+ . . . + (2N) 

// function Sum () {

// let n = +prompt('n sonini kiriting=');
// let s = 0;
// for (let i = n; i <= n * 2; i++) {
//     s += i * i;
 
// }
// console.log('a va b b gacha bo`lgan butun sonlar kvadratining yig`indisi: ', s); 

// }


// Sum () 

// // 12



// let n = +prompt('n sonini kiritng');

// function k(num) {


// let s = 1;


// for (let i = 1.1; i <=num; i+=0.1) {
//     s *= i; 
// }

// console.log('ko`paytma: ', s); 


// }

// k (n)



























