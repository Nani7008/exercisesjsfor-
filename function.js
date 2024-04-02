



// 1. Oy raqami kiritilsa Qaysi fasli ekanini aniqlovchi funksiya yozing


// function fasl(oy) {

//     switch (oy) {
//         case 12: 
//             oyFasl = "Dekabr QISH";
//             break;
//         case 1: 
//             oyFasl = "Yanvar QISH";
//             break;
//         case 2: 
//             oyFasl = "Fevral QISH";
//             break;
//         case 3: 
//             oyFasl = "Mart BAHOR";
//             break;
//         case 4: 
//             oyFasl = "Aprel BAHOR";
//             break;
//         case 5: 
//             oyFasl = "May BAHOR";
//             break;
//         case 6: 
//             oyFasl = "Iyun YOZ";
//             break;
//         case 7: 
//             oyFasl = "Iyul YOZ";
//             break;
//         case 8: 
//             oyFasl = "Avgust YOZ";
//             break;
//         case 9: 
//             oyFasl = "Sentabr KUZ";
//             break;
//         case 10: 
//             oyFasl = "Oktabr KUZ";
//             break;
//         case 11: 
//             oyFasl = "Noyabr KUZ";
//             break;
//         default: 
//             oyFasl = "Hatolik bunday oy raqami yo`q";
//             break;
//     }
//     return oyFasl;
// }

// let oy = +prompt("Iltimos oy raqamini kiriting");
// alert("Hozir " + fasl(oy));



// 2.  Yoshingizni aniqlovchi funksiya yozing 


// let birthdate=+prompt ("Iltimos tug`ilgan yillingizni kiriting")
// let currentyear=+prompt ("Iltimos hozirgi yilni kiriting")
// function birth (b, c){
// let birthdate=c-b;
// return birthdate;
// }
// alert ("Sizni yoshingiz " +birth(birthdate, currentyear) + " yoshda " )

// 3. N gacha bo'lgan juft sonlar yig'indisini , N gacha bo'lgan toq sonlar yig'indisiga nisbatini aniqlovchi dastur tuzing. 



// function juftSonlarYigindisi(n) {

//     let s = 0;

//     for (let i = 1; i <= n; i++) {
//         if (i % 2 == 0) {
//             s += i;
//         }
      
//     }
//     return (s)

// }


// function toqSonlarYigindisi(n) {

//     let s = 0;

//     for (let i = 1; i <= n; i++) {
//         if (i % 2 !== 0) {
//             s += i;
//         }
      
//     }
//    return (s)
// }
// let n = +prompt ("n sonini kriting")
// console.log(juftSonlarYigindisi(n));
// console.log (toqSonlarYigindisi(n));
// console.log ((juftSonlarYigindisi(n))/(toqSonlarYigindisi(n)))

// 4.  Telefon raqam kodiga qarab qaysi "Operator" ekanini aniqlovchi dastur yozing.

// function operator(kod) {

//     switch (kod) {
//         case 99: 
//             kodOperator= "Uzmobile";
//             break;
//         case 95: 
//             kodOperator= "Uzmobile";
//             break;
//         case 97: 
//             kodOperator= "UMS";
//             break;
//         case 93: 
//             kodOperator= "Ucell";
//             break;
//        case 94: 
//             kodOperator= "UMS";
//             break;
//        case 90: 
//             kodOperator= "Beeline";
//             break;
//        case 91: 
//             kodOperator= "Beeline";
//             break;
//     }
//     return kodOperator;
// }

// let kod = +prompt("Iltimos kod raqamini kiriting");
// alert(operator(kod));

