

const json = '{"name": "john"}';


try {
    var arr = JSON.parse(json);
    if(!arr.age)
    throw new Error("nhi aya age");
}

catch(err) {
    console.log(err.message);
}

let p1 = {
    a:1,
    b:2,
    c:3,
}

let p2 = {
    d:4,
    e:5,
    fun:function() {
        console.log(this)
    }
}

let newFun = p2.fun.bind(p1)

console.log(newFun().a)