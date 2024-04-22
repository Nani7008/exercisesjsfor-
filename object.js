// const laptop={
//     name: "Asus",
//     processor: "13th Gen Intel(R) Core(TM) i9-13900H   2.60 GHz",
//     installedRam: "16.0 GB (15.6 GB usable)",
//     DeviceId: "57644E-0CF8-469B-89E7-6A295BCAD230",
//     ProductId: "00342-21141-33445-AAOEM",
//     SystemType: "64-bit operating system, x64-based processor",
//     PenAndTouch: "No pen or touch input is available for this display",
//     Windows: "Windows 11 Home",
//     passport: function (){
//         console.log (`
//         Name of Computer: ${laptop.name}
//         Laptop processor: ${laptop.processor}
//         Laptop Ram: ${laptop.installedRam}
//         `)
//     }

// }
// laptop.passport ()

// 16-masala: Talaba ob'yekti yaratish

// let person = {
//     ism: "Narimonjon",
//     yoshi: 28,
//     fakulteti: "Xalqaro Moliya",
//     oqish_yili: 2014,
//     tel_raqami: "993250535"
//   };
//   console.log(person);

//   // 17-masala: Kitob ob'yekti yaratish
//   let kitob = {
//     nomi: "Alvido Bolalik",
//     muallif: "Tohir Malik",
//     chop_etilgan_yil: 2019,
//     sahifa_soni: 504,
//     tili: "O`zbek tili"
//   };

//   console.log(kitob);

//   // 18-masala: Telefon ob'yekti yaratish
//   let telefon = {
//     model: "iPhone 13",
//     marka: "Apple",
//     ram: "6 GB",
//     disk: "128 GB",
//     ekran olchami: "6.1 inch"
//   };
//   console.log(telefon);

//   // 19-masala: Uy ob'yekti yaratish
//   let uy = {
//     manzil: "Toshkent sh., Uchtepa tumani, Bog`obod ko'chasi",
//     xonalar_soni: 3,
//     uy_nomi: "Kvartira",
//     yil: 2012,
//     maydon: "80 kv.m"
//   };
//   console.log(uy);



// const person={
//     name: "Narimonjon",
//     surname: "Mannopov",
//     age: 28,
//     fakulteti: "Xalqaro Moliya",
//     oqish_yili: 2014,
//     tel_raqami: "993250535",
//     nationality: "Uzbek",
//     hobbies: ("football", "cybersport", "swimming", "reading"),   
//     address:{city:"Tashkent", district:"Uchtepa", house_id:"12"},



//     passport: function (){
//                 console.log (`
//                 Name: ${person.name}
//                 age ${person.age}
//                 address ${person.address}
//                 `)
//             }


//     }

// console.log(Object.keys(person))
// console.log(object.values(person))
// console.log(object.entries(person))
// console.log(object.fromEntreies(person))





// let questions = [
//     "Ismingiz nima?",
//     "Yoshingiz nechida?",
//     "Qaysi kursni tanlamoqchisiz(Frontend/Backend)?",
//     "Ertab yoki Kechasi?",

// ];

// let answers = [];
// let currentQuestionIndex=0;


// function askQuestion () {
//     while (currentQuestionIndex<questions.length) {
//         let answer = prompt (questions[currentQuestionIndex]);
//         if (!answer) {
//             continue;
//         }
//         else {
//             answers.push(answer);
//             currentQuestionIndex++;
//         }
//     }
// }

// function displayAnswers () {
//     console.log("Javoblar");
//     for (let i = 0; i < answers.length; i++ ) {
//         console.log(`${i+1}. ${questions[i]}: ${answers[i]}`);
//         console.log("===============================================");
//     }
// }
// askQuestion();
// displayAnswers()


// // 19.04

// const myCar = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2022,
//     color: "red",
//     milage: 25000,
//     accelerate: function () {
//         console.log("The car is this.accelerating");
//     },
//     brake: function () {
//         console.log("The car is braking");
//     },
//     honk: function () {
//         console.log("Beep Beep");
//     },
//     fullInfo: function () {
//         this.accelerate();
//         this.brake();
//         this.honk(); 
//         console.log(`car name ${this.make} - car model: ${this.model} the year: ${this.year} the car total miles: ${this.milage}`);
//     }
// }

// // console.log(myCar.fullInfo());
// // const keysOfCar = Object.keys(myCar)
// // console.log(keysOfCar);
// // const valuesOfCar = Object.values(myCar)
// // console.log(valuesOfCar);
// // const entries = Object.entries(myCar)
// // console.log(entries);
// const car1 ={
//     make: "Toyota",
//     model: "Corolla",
//     year: 2022,
//     someObject: {x: 1, y: 2}
 
// };
// const car2 ={
//     color: "red",
//     milage: 25000,
//     year: 2020,
// };

// const car3 ={
// year: 2024,
// };

// const mergeCar = Object.assign({},car1, car3, car2);

// console.log(mergeCar);




// const make = "Toyota";
// const model = "Corolla";
// const year = 2022;


// const car = {
//     make: make,
//     model: model,
//     year: year,
    
// //   }
// const {
//     make,
//     model,
//     year,
//     someObject: {x, y}
// } =car1;
// const nergedCar = {...car1, ...car2};
// console.log(make, model, year, x, y);
// console.log(mergeCar);
// console.log(car1.hasOwnProperty("make"));
// console.log(car2.hasOwnProperty("make"));





// let user = new Object({name: "narimonjon", username: "nani" });
// let user1 = {}

// console.log(user.username);
// console.log(user);

// console.log(user);
// user[key]= true
// console.log(user);






