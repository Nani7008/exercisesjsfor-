
// // 14. Uch xonali son berilgan. uning o'ngdan birinchi raqamini o`chirib chap tarafiga yozishdan hosil bo`lgan sonni aniqlovchi java script dasturida programma tuzilsin

// let abc = +prompt ('abc=');
// let a = (abc - abc%100)/100;
// let b = (abc%100 - abc%10)/10;
// let c = (abc%10)
// alert(c*100+a*10+b)

// 15.  Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin (Kirish=123 Chiqish 213)

// let abc = +prompt ('abc=');
// let a = (abc - abc%100)/100;
// let b = (abc%100 - abc%10)/10;
// let c = abc%10
// alert(b*100+a*10+c)

// 16. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan birliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin (Kirish=123 Chiqish 132)

// let abc = +prompt ('abc=');
// let a = (abc - abc%100)/100;
// let b = (abc%100 - abc%10)/10;
// let c = abc%10
// alert(a*100+c*10+b)

// 17. 999 dan katta bo'lgan son berilgan. Bir marta bo'lib butunni va bo'lib qoldiqni olish operatsiyasidanfoydalanib berilgan sonni yuzliklar xonasidagi sonni aniqlovchi programma tuzilsin.
// let abcd = +prompt ('abcd=');
// alert((abcd%1000-abcd%100)/100);

// 18.999 dan katta bo'lgan son berilgan. Bir marta bo'lib butunni va bo'lib qoldiqni olish operatsiyasidanfoydalanib berilgan sonni mingliklar xonasidagi sonni aniqlovchi programma tuzilsin.

// let abcd = +prompt ('abcd=');
// alert((abcd-abcd%1000)/1000);

// 19. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha minut to’la o'tganligini aniqlovchi programma tuzilsin.

// let sekund= +prompt ('sekund=')
// alert(sekund/60 +" minut ")

// 20. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha to’la soat o'tganligini aniqlovchi programma tuzilsin.

// let sekund= +prompt ('sekund=')
// alert(sekund/3600 +"soat")

// 21. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha minut va sekund o’tganini aniqlovchi programma tuzilsin.
// let sekund= +prompt ('sekund=')
// let minut = (sekund / 60)
// let s = sekund % 60;
// alert(minut ,  s )

// 22. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha soat va sekund o’tganini aniqlovchi programma tuzilsin.

// let sekund= +prompt ('sekund=')
// let soat = (sekund % 3600)
// let s = (sekund-soat) / 3600;
// alert(soat ,  s )


// 23. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha soat, minut va sekund o’tganini aniqlovchi programma tuzilsin

// let sekund= +prompt ('sekund=')
// let soat = (sekund / 3600)
// let s = sekund % 3600;
// let minut = s/60
// let sec= s%60
// alert(soat + " soat " +  minut + " minut " +  sec + " soniya otdi " )    



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




// let operator = prompt ('operator=')
// let operand1 = +prompt ('a=')
// let operand2 = +prompt ('b=')
// let result;
// switch (operator) {
//     case "+":
//         result = operand1 + operand2
//         break;
//     case "-":
//             result = operand1 - operand2
//         break;
//     case "/":
//                 result = operand1 / operand2
//         break;
//     case "*":
//                     result = operand1 * operand2
//         break;
//     default: 
//         result = "Error";
// }


// alert (`${result}`);

// let operator = prompt ('operator=')
// let operand1 = +prompt ('a=')
// let operand2 = +prompt ('b=')
// let result;
// switch (operator) {
//     case "+":
//         result = operand1 + operand2
//         break;
//     case "-":
//             result = operand1 - operand2
//         break;
//     case "/":
//                 result = operand1 / operand2
//         break;
//     case "*":
//                     result = operand1 * operand2
//         break;
//     default: 
//         result = "Error";
// }


// alert (`${result}`);


// const correctUsername = "nani7008"
// const correctPassword = "123456"
// let isLoggedIn = false;
// console.log("Welcome back")
// while (!isLoggedIn) {
//     let username = prompt("enter username");
//     let password = prompt("enter password");


//     if (username === correctUsername && password === correctPassword) {
//         isLoggedIn = true;
//         console.log("Welcome user")
//     }

//     else {
//         console.log("Incorrect password or username")
//     }
// }





// 1. for(let i=1; i<=10; i++) {
// // alert (i)
// console.log(i)
// }

//2
// let n=11
// for(let i=1; i<=n; i++) {
//     console.log (i)
// }

