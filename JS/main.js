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

function changeString() {
    let str = document.getElementById('password').value;
    str = Number(str);
    console.log(typeof str);
}


while (true) {
    let inp = prompt("enter input", 00);
    if (inp == 0 || !inp || typeof inp != Number) break;
    alert(inp);
}