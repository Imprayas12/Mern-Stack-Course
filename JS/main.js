// let arr = [1,null,'hello',true,undefined];

// for(let i = 0; i < arr.length; i++) {
//     str = `current type is ${typeof(arr[i])}`
//     alert(str);
// }

// let x = NaN;

// console.log(x, typeof x);

// let isGreater = 4 > 1;

// alert('Satark hoja vro');

// let a = prompt('How chutiya ma i?','Bohot sara');
// let str = `hehe`;

// let a = confirm('Is greater than 1?')
// a = Number(str);
// alert(a);
// let age = prompt("Enter your age",00);
// "use strict";
// if(age < 19) {
//     alert("Shadi nhi krni abhi");
// }
// else {
//     alert("hehe");
// }
// function changeString() {
//     let str = document.getElementById('password').value;
//     str = Number(str);
//     console.log(typeof str);
// }

// let sum = () => {

// }
// while (true) {
//     let inp = prompt("enter input", 00);
//     if (inp == 0 || !inp || typeof inp != Number) break;
//     alert(inp);
// }

// let num = 1e-5;
// console.log(num);


// num = 255;
// console.log(num.toString(16));

// let anotherNum = 12.47438553;
// console.log(Math.floor(anotherNum) + Math.ceil(anotherNum));

// //Round off to specific number of decimal places

// console.log(anotherNum.toFixed(3)); // Upto 3 decimal places

// let numbber = prompt("give me some number",00);
// let power = prompt("give me some power",00);
// alert("power = " + Math.pow(numbber,power));

// let str = 'this is a is a string and is a is an is example';
// let ind = 0;
// var searchString = 'is';
// while(true) {
//     ind = str.indexOf('is',ind + searchString.length -1);
//     if(ind == -1) break;
//     alert(ind);
//     document.write(str + "\n");
// }

/**********************Arrays********************/

// var arr = [1, 323, 43, 44, 3, 32, 4, 13, function () { alert("lol") }];

// let sum = 0;


// console.log(arr.pop());
// console.log(arr.push(45, "hehe", function () {
//     var a = prompt("how do you do", "");
//     console.log(a);
// }))

// function printArr(arr) {
//     arr.forEach(element => {
//         if (typeof element === 'function') {
//             element()
//         }
//         else console.log(typeof element);
//     });
// }

// let arr = [[1,2,3],[4,5,6],[7,8,9]];


// let sum = 0;
// let len = arr.length;
// let c = 0;
// for(let i = 0; i < len; i++) {
//     for(let j = 0; j < arr[i].length;j++){
//         console.log(c + " " + j);
//         sum += arr[c][j];
//         arr.push(arr[i][j]);
//     }
//     c++;
//     console.log(arr);
//     arr.shift();
// }

// console.log(sum);
// console.log(arr);
// let i = 1;
// while(i < arr.length) {
//     arr[i].forEach(element => {
//         arr[0].push(element);
//     })
//     arr.splice(i,1);
// }
// arr = arr[0];
// console.log(arr);

// Reverse words in a string;
// let str = "This is a string";
// let fin = "";
// let i = 0; 
// while(i < str.length) {
//     let j = i;
//     let cur = "";
//     while(j < str.length) {
//         if(str.charAt(j) == ' ') break;
//         cur = str.charAt(j) + cur;
//         j++;
//     }
//     cur =  " " + cur;
//     fin = fin + cur;
//     i = j + 1;
// }
// console.log(fin);

// function camelCase(string) {
//     // var arr = string.split("");
//     let fin = "";
//     let i = 0;
//     fin += string.charAt(i).toLowerCase();
//     i++;
//     while(i < string.length) {
//         let j = i;
//         fin += string.charAt(j).toUpperCase();
//         j++;
//         while(j < string.length) {
//             if(string.charAt(j) == '-') break;
//             fin += string.charAt(j);
//             j++;
//         }
//         i = j + 1;
//     }
//     return fin;
// }

// console.log(camelCase("background-color-red"));

// let obj = {
//     "hey" : 1,
//     "hi" : 2,
//     "hello1" : 3,
//     welcome : function() {
//         console.log("welcome")

//     },
//     arr:['saare','taare','tod','le','aavan','tere','kadma','ch','rkh','deya','mai']
// }

// obj['isAdult'] = true
// console.log(obj)

// let str = "aabc   a da  fajfa   fajfioar  jfoefhor bbca caab ddac"
// let obj = {

// }
// for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) != " ") {
//         if (obj[str.charAt(i)]) {
//             obj[str.charAt(i)] += 1;
//         }
//         else
//             obj[str.charAt(i)] = 1;
//     }
// }
// console.log(obj);

/************************ Prototypes ***************************/

/*let obj1 = {
    name: "Prayas",
    age: 19
}

let obj2 = {
    __proto__:obj1
}*/

//or

/*obj2 = Object.create(obj1)*/

/*let arr = Object.create(Array)

arr = [1,2,3,4,5]
arr.__proto__ = Array.prototype
arr.push = function() {
    console.log("push value")
}
arr.push(1,2)
arr.push()*/

/*************************** Callbacks ****************************/

/*
 * CallBacks kya hote hai BC?
 * bohot jaruri hoti hai
 * maan lo function f1 hai..agr kuch krne ke baad wo f2 ko call lgata h to f2 hogya callback.
 * f1() --> Kaam Kiya --> f2() => f2 = callback
 * Recursion is subset of Callback
 */

// function print(val) {
//     console.log(val);
// }


// function add(n1,n2,print) {
//     let sum = n1 + n2
//     print(sum);
// }

// add(12,13,print)

// const fs = require("fs");
// function print(err,data) {
//     if(!err) console.log(data);
// }
// function callback(err,data) {
//     if(!err) {
//         count += 1;
//         if(count < 6) {
//             var data = fs.readFile(count + ".html", "utf-8",print);
//         }
//         console.log(data); 
//     }
// } 
// for(let i = 1; i <= 5; i++) {
//     fs.readFile(i + ".html", "utf-8",print);
// }

/**Sahi wala synchronous function hai bro ye**/
// let count  = 0
// function cb(err,data){
//     count += 1;
//     if(count <= 5) {
//         if(!err) {
//             console.log(data);
//         }
//         else console.log(err);
//     }
//     fs.readFile((count + 1) + ".html", "utf-8",cb);
// }

// fs.readFile("1.html", "utf-8",cb)

/*******************Set timeout ******************/
// setTimeout(() => {
//     console.log("eksilento");
// },3000);
// let a = true;

// while(a) {
//     setTimeout(function() {
//         a = false;
//     },10000);
//     console.log("hello");
// }
/* let a = true
let count = 0
setInterval(function() {
    if(a) {
        count++;
        console.log(count);
    }
},1000);

setTimeout(function() {
    a = false;
},10069); */


/***************Promises ********************/
// const p = new Promise((function(resolve,reject) {
//     setTimeout(() => {
//         let randomNum = Math.floor(Math.random() * 10);
//         if(randomNum % 2 == 0){
//             resolve(randomNum);
//         }
//         else {
//             reject(resolve);
//         }
//     },1000);
// }));

//     p.then((data) => {
//         console.log(data)
//     }).catch().catch(() => {
//         console.log("reject")
//     }) 
/*******************Async/Await*******************/

async function abc() {
    return "hello"
}
const fs = require('fs');

// function NONASYNC() {
//     let readFilePromise = fs.promises.readFile("1.html","utf-8");  
//     resolve(readFilePromise);
//     readFilePromise.then((data) => {
//     console.log(data);
//     return data;
// })
// // }
// async function ASYNC() {
//     let data = await fs.promises.readFile('1.html','utf-8')
//     console.log(data);
// }
// ASYNC()
// function abC() {
//     const p = new Promise((resolve,reject) => {
//         resolve("hello")
//     })
//     return p;
// }
// const fs = require('fs');
// .then((data) => {
//     console.log(data);
//     return data + 3;
// })

// .then((data) => {
//     console.log(data);
//     return data + 4;
// })

// .then((data) => {
//     console.log(data);
// })

// let readFilePromise
// abc().then((data) => {
//     console.log(data)
//     return data + "hello"
// })

// .then((data) => {
//     console.log(data);
//     return data + "hello2"
// })

// .then((data) => {
//     console.log(data)
// })

// const fs = require('fs')
// async function abc() {
//     await fs.promises.writeFile("1.html","hello");
//     let data = await fs.promises.readFile("2.html","utf-8");
//     console.log(data);

//     return "how are you"
// }
// async function main() {
//     let data = await abc()
//     console.log(data)
// }

// main()
function abc() {
    return new Promise((resolve,reject) => {
        fs.promises.readFile("2.html","utf-8").then((data) => {
            console.log(data);
        })
    })
}
abc().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

