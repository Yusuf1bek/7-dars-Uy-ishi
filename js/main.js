// Uy ishi 
// task -1
// let person = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic company",
//     interest:"game",
//     hobby:"sleep",
//     number:"+998990120020",
//     username:"AU"
// };
// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }
// task -1

// task -2
// let person1 = {
//     name: "Abdulloh",
//     age: 19,

// };
// let person2 = { 
//     interest: "game",
//     hobby: "sleep",

// };

// let twoObjects = Object.assign({}, person1, person2);
// console.log(twoObjects);
// task -2

// task -3
// let numbers = [1,2,3,4,5,6,];
// function theLastOfNumbers(arr) {
//     arr.push(arr.length + 1);
//     return arr;
// }
// let newNum = theLastOfNumbers(numbers);
// console.log(newNum); 
// task -3

// task -4
// let arr = [1,2,3,4,5,6];
// function arrFunc(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     if (arr[0] % 2 === 0) {
//         arr.unshift(total);
//     } else {
//         arr.push(total);
//     }
//     return arr;
// }
// let res = arrFunc(arr);
// console.log(res); 
// task -4

// task -5
// let arr = [1,2,4,5,6];
// function changeNumbers(arr) {
//     if (arr.length > 1) {
//         let total = arr[0];
//         arr[0] = arr[arr.length - 1];
//         arr[arr.length - 1] = total;
//     }
//     return arr;
// }
// let res = changeNumbers(arr);
// console.log(res); 
// task -5

// task -6
// function arrFuntWord(arr, count) {
//     if (count === 6) {
//         return arr; 
//     }
//     let word = prompt("So'z kiriting!");
//     arr.push(word); 
//     return arrFuntWord(arr, count + 1);
// }
// let res = arrFuntWord([], 0);
// console.log(res);
// task -6

// task -7
// function questionFunc(arr, count) {
//     if (count === 3) {
//         return arr; 
//     }
//     let question = prompt("Savol kiriting?");
//     arr.push(question); 
//     return questionFunc(arr, count + 1); 
// }
// function answerFunc(arr, index, answers) {
//     if (index === arr.length) {
//         return answers; 
//     }
//     let answer = prompt(arr[index]); 
//     answers.push(answer); 
//     return answerFunc(arr, index + 1, answers); 
// }
// let questions = questionFunc([], 0);
// let answers = answerFunc(questions, 0, []);
// console.log(answers);
// task -7

// task -8
// let userString = prompt("Ixtiyoriy soz kiriting");
// function stringFunc() {
//     let arr = [];
//     arr.push(userString);    
//     return arr;
// }
// let res = stringFunc();
// console.log(res); 
// task -8

// task -9
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 4, 5, 6, 7];
// function twiceArrFunc(arr1, arr2) {
//     let arr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])) {
//             arr.push(arr1[i]);
//         }
//     }
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr1.unshift(arr[i]);
//         arr2.unshift(arr[i]);
//     }
//     return { arr1, arr2 };
// }
// let res = twiceArrFunc(array1, array2);
// console.log(res.arr1); 
// console.log(res.arr2); 
// task -9

// task -10
// let obj = {
//     name: "John",
//     age: 30,
//     job: "Mehanic",
//     study:"None",
//     travel:"US"
// };
// let keyOfArr = Object.keys(obj);
// let lengthOfArr = keyOfArr.length;
// console.log(keyOfArr); 
// console.log("Ushbu array ning lengthi - " + lengthOfArr + " ga teng"); 
// task -10

// task -11
// function fourNumFunc(arr, count) {
//     let userNumber = prompt("Son kiriting!");
//     if (count === 4) {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i];
//         }
//         console.log("Siz kiritgan soningizni yig'indisi -", sum);
//         return arr; 
//     }
//     let number = Number(userNumber); 
//     arr.push(number);
//     return fourNumFunc(arr, count + 1);
// }
// fourNumFunc([], 0);
// task -11

// task -12
// let person1 = {
//     name: "Abdulloh",
// };
// let person2 = { 
//     age: 20,
// };
// let arr = [person1, person2];
// for (let person of arr) {
//     let values = Object.values(person);
//     for (let value of values) {
//         console.log(value);
//     }
// }
// task -12
// Uy ishi 