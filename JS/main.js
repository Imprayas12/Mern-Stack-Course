let arr = [1,null,'hello',true,undefined];

for(let i = 0; i < arr.length; i++) {
    str = `current type is ${typeof(arr[i])}`
    alert(str);
}