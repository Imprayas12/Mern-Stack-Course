const fs = require("fs")

// console.log(fs);
function readFile(file) {
    if(file > 3) return;
    var fileName = file + ".html"
    fs.readFile(fileName, {
    encoding: 'utf-8',
    flag: 'r'
    }, (err,data) => {
    if(!err) {
        console.log(data);
        readFile(file + 1);
    }
        else console.log(err);
    })
}
// let arr = []
// function cb(err,data) {
//     if(!err) {
//         // console.log(data);
//         console.log(data.toString());
//         arr.push(data.toString());
//     }
// }

// const path = require("path")
// var file1 = fs.readFileSync(path.join(__dirname,'input1.txt'),'utf-8');
// let arr1 = file1.split(/\r?\n/);
// var file2 = fs.readFileSync(path.join(__dirname,'input2.txt'),'utf-8');
// let arr2 = file2.split(/\r?\n/);
// let newArr = []
// for(let i = 0; i < arr1.length; i++) newArr.push(arr1[i]);
// for(let i = 0; i < arr2.length; i++) newArr.push(arr2[i]);
// let newString = newArr.sort((a,b) => (a - b)).join("\n");

// fs.writeFile('output.txt',newString,() => {});
// console.log(arr);

const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/home') {
        res.write("hehehehe");
        res.end();
    }
    else if(req.url === '/contact') {
        res.write(`<h1 style = "text-align:center">Contact page</h1>`)
        res.end();
    }
    else {
        res.write(
            `
            <h1 style = "text-align:center">ERROR CODE: 404</h1>
            <h1 style = "text-align:center">PAGE NOT FOUND</h1>
        `)
        res.end();
    }
})

server.listen(5000)
console.log("Server is active on port 5000");