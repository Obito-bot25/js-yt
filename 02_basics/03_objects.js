// singleton

// object literals

const JsUser = {
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    isLoggedIn: false,
    email:"Arjit@gmail.com"


}
console.log(JsUser.email)
console.log(JsUser["email"])

JsUser.email = "Arjit@chatgpt"
Object.freeze(JsUser);
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);


}
console.log(JsUser.greeting());