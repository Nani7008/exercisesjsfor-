
// TODO: 1 Template Literals:

// Exercise 1: Create a template literal that displays your name, age, and current city.

// const name = "Narimonjon";
// const age = 28;
// const currentCity = "Tashkent"
// const biography = `My name is ${name}, I am ${age} years old, I live in ${currentCity}`
// console.log(biography);

// function createBiography(name, age, currentCity) {
//     return "My name is " + name + " " + "I am " + age + " " + "I live in "  + currentCity
// }

// console.log(createBiography("Narimonjon", 28, "Tashkent"));



// 2. Write a function that takes a person's name and birthdate as parameters and returns a greeting using a template literal.

// function greeting(name, birthdate) {
//     const age = 2024 - birthdate;
//     if (typeof name !== "string" || typeof birthdate !== "number") {
//         return "Please provide valid information (your name and date of birth in year format only)";
//     } else {
//         // Capitalize the first letter of the name
//         const capitalized_name = name.charAt(0).toUpperCase() + name.slice(1);
//         return `Assalomu Alaykum ${capitalized_name}, ${age} years old`;
//     }
// }


// console.log(greeting("narimonjon", 1995));


// function greeting(name, birthdate) {
//     const age = 2024-birthdate;
//    return `Hello ${name}, your age is ${age}` 
// }
// console.log(greeting("Narimonjon", 1995));




// TODO: 2 String Length:

// // 1 Exercise 1: Write a function that takes a string as input and returns the length of the string

// function stringLength(info) {
//     const string = String(info);
//     return string.length;
// }

// console.log(stringLength("narimonjon"));


// Exercise 2: Given a string, find the character at the middle position.

// function findingMcharacter(string) {
//     const middle = Math.floor(string.length / 2);
//     return string.charAt(middle);
// }
// console.log(findingMcharacter("narimonjon"));

// TODO: 3. String Comparison:

// Exercise 1: Write a function that compares two strings and returns  true  if the first string is greater than the second, and  false  otherwise.

// function comparisonString(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     for (let i = 0; i < str1.length; i++) {
//         if (str1.toLowerCase().codePointAt(i) !== str2.toLowerCase().codePointAt(i)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(comparisonString("narimonjon", "Narimonjon"));



// Exercise 2: Write a function that takes a string and returns the Unicode code point of the first character

// function findingNletter(n) {
//     let str = "Uzbekistan";
//     return str.codePointAt(n)
// }
// console.log(findingNletter(0));

// TODO: 4. String Iteration:

// Exercise 1: Write a function that takes a string as input and logs each character to the consol

// function eachCharacter(str) {
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i]);
//     }
// }
// console.log(eachCharacter("uzbekistan"));

// Exercise 2: Write a function that takes a string as input and returns an array of the characters in the string.

// function stringAsArray(str) {
//    const arr = [...str]; 
//    return arr;
// }
// console.log(stringAsArray("uzbekistan"));

// TODO: 5. Slicing and Substring:
// 1: Write a function that takes a string and two indices as input,and returns a new string that is the substring between the two indices.

// function getPortionOfString(str, start, end) {
//     return str.slice(start, end);
// }

// const message = "Narimonjon";
// const portionString = getPortionOfString(message, 0,4);
// console.log(portionString);

// Write a function that takes a string and returns the last word ofthe string.

// function getLastWord(str) {
//     const words = str.sp lit(" ");
//     return words[words.length - 1];
// }
// console.log(getLastWord("Assalomu Allaykum"));

// TODO: 6. . Uppercase and Lowercase:
// // 1 Write a function that takes a string as input and returns the string in all uppercase.
// function upperCase (string) {
//     return string.toUpperCase();
// }
// console.log(upperCase("salom"));

// Exercise 2: Write a function that takes a string as input and returns the string in all lowercase.

// function lowerCase (string) {
//     return string.toLowerCase();
// }
// console.log(lowerCase("SALOM"));

// TODO: 7. Replacing Text:

// 1: Write a function that takes a string, an old value, and a new value as input, and returns a new string with the old value replaced by the new value

// function replacedWord(oldValue, newValue) {
//     const text = "Hello World"
//     const updatedText = text.replace (oldValue, newValue);
//     return updatedText;
// }


// console.log(replacedWord("Hello", "Bye"));


// 2. Exercise 2: Write a function that takes a string and a word as input, and returns a new string with all occurrences of the word removed.


// function replaceAlldWord(oldValue, newValue) {
//     const text = "Hello World, Hello money"
//     const updatedText = text.replaceAll (oldValue, newValue);
//     return updatedText;
// }


// console.log(replaceAlldWord("Hello", "Bye"));

// TODO: 8. Concatenation: 
// Exercise 1: Write a function that takes two strings as input and returns a new string that is the concatenation of the two.

// function concatenation (str1, str2) {
//     return str1.concat(str2);
// }
// console.log(concatenation("Narimonjon ", "Mannopov"));

// // Exercise 2: Write a function that takes an array of strings as input and returns a single string that is the concatenation of all the strings in the array.

// function arrayConcatenation (arr) {
//     return arr.join("-")
//     }
// const array = ["blue", "red", "green", "yellow"]
// console.log(arrayConcatenation(array))

// TODO:  9. . Padding:

// Exercise 1: Write a function that takes a string and a target length as input,and returns a new string that is padded with zeros at the beginning to reach the target length.

// function padding(number) {
//     const str = String(number);
//     return str.padStart(5, "0");
// }

// console.log(padding(555)); 

// Exercise 2: Write a function that takes a string and a target length as input,and returns a new string that is padded with a specified character at the end to reach the target length.

// function paddingEnd(number) {
//     const str = String(number);
//     return str.padEnd(5, "A");
// }

// console.log(paddingEnd(555)); 

// TODO: 10. Accessing Characters:

// Exercise 1: Write a function that takes a string and an index as input, and  returns the character at that index.

// function indexCh (index) {
//     const str = "Narimonjon";
//     return str.charAt(index);
// }

// console.log(indexCh(0));

// Exercise 2: Write a function that takes a string and an index as input, and returns the character code of the character at that index.

// function findingNletter(n) {
//     let str = "Ustoz";
//         return str.codePointAt(n)
// }
// console.log(findingNletter(3));

// TODO: 11.  Repetition:
// Exercise 1: Write a function that takes a string and a number as input, and returns a new string that is the original string repeated the specified number of times.

// function repaatManyTimes(str, index) {
//     return str.repeat(index)

// }

// console.log(repaatManyTimes("Rahmat ", 5));

// Exercise 2: Write a function that takes a character and a number as input,and returns a string that is the character repeated the specified number of times.

// function repeatPlease (character, number) {
//     return character.repeat(number);
// }
// console.log(repeatPlease("A", 100));

// Second way to solve the problem

// function repaatManyTimes(str, index) {
//     for (let i = 0; i<index; i++)
//     console.log(str);
// }
// console.log(repaatManyTimes("b", 101));



// TODO:  12// Exercise 1: Write a function that takes a string and a separator character as input, and returns an array of substrings that were separated by the separator.


// function splitString(str, separator) {
//     return str.split(separator);
// }

// const inputString = "Football is good game";
// const separator = " ";
// const substringsArray = splitString(inputString, separator);
// console.log(substringsArray);


// Exercise 2: Write a function that takes a string and a separator character as input, and returns an array of substrings that were separated by the separator, with a limit on the number of splits.

// function splitWithLimit(input, separator, limit) {
//     return input.split(separator, limit);
// }
// const input = "apple,banana,orange,kiwi";
// const separator = ",";
// const limit = 3;

// const result = splitWithLimit(input, separator, limit);
// console.log(result); 

//TODO: 13  Write a function that takes a string and a substring as input, and returns  true  if the substring is at the beginning of the string, and  false  otherwise. 

// function isSubstringAtBeginning(inputString, substring) 
// {     return inputString.startsWith(substring); 

// }
// console.log(isSubstringAtBeginning("Assalomu alaykum", "Assalomu"));
 
// Exercise 2: Write a function that takes a string and a substring as input, and returns  true  if the substring is at the end of the string, and  false  otherwise.

// function isSubstringAtEnding(inputString, substring) 
// {     return inputString.endsWith(substring); 

// }
// console.log(isSubstringAtEnding("Assalomu alaykum", "alaykum"));

// Exercise 3: Write a function that takes a string and a substring as input, and returns  true  if the substring is anywhere in the string, and  false  otherwise.

// function isSubstringAtEnding(inputString, substring) 
// {     return inputString.endsWith(substring); 

// }
// console.log(isSubstringAtEnding("Assalomu alaykum", "alaykum"));

// function isSubstringAtAny(inputString, substring) 
// {     return inputString.includes(substring); 

// }
// console.log(isSubstringAtAny("Assalomu alaykum aka yaxshimisiz?", "aka"));  


// // TODO: 14. 8. Trimming Whitespace:
// Exercise 1: Write a function that takes a string as input and returns a new string with all leading and trailing whitespace removed.

// function whiteSpaceDelete(str) {
//     return str.trim();
// }

// console.log(whiteSpaceDelete("   Hello World!      "));






