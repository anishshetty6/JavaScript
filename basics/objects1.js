
const mySym=Symbol("key")

//object literals

const JsUser={
    name: "Alan",
    "full name":"Alan george",
    [mySym]:"myKey1",
    age:17,
    location:"bombay",
    email:"alan.jio.com",
    loggedIn: false,
    lastLogin: ["Monday","Saturday"]
}

console.log(JsUser.email)    //common way
console.log(JsUser["email"]) //better to declare this way
console.log(JsUser["full name"])
//console.log(JsUser.full name)   --> such declaration doesnt work, also with symbol data type
console.log(JsUser[mySym])
console.log(typeof mySym)

email="alan.airtel.com"  //change object value with '='

//Object.freeze(JsUser)   //freeze object value

JsUser.greeting=function(){
    console.log("Hello user")
}
JsUser.greeting2=function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());