//  const obj1={}  non singleton object **imp
// const obj=new obj() singleton object  **imp

// Object.create

// object literals 


const mySym = Symbol("key1")       


const JsUser = { 
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //imp condition ***
    [mySym]: "mykey1",  //imp condition  ask in interview***
    age:18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser);

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    console.log(`user email ${this.email}`)    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



