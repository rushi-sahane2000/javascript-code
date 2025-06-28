// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];
// console.log(myHeors)

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6)    //this method are push the element in last 
// myArr.push(7)
// myArr.pop()    //this method are pop the element in last

// myArr.unshift(9) //this method are push the element in  first
// myArr.shift()    //this method are pop  element in first

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); //contain 1,2

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); //contain 1,2,3
console.log("C ", myArr);
console.log(myn2);
