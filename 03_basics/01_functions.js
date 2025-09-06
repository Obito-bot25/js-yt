function sayMyName(){

console.log(2+2)
console.log(25/5)
}

//sayMyName()

function addTwoNumbers(number1,number2){ ///number1 and 2 are parameters
    
    let result = number1 + number2;
    return result
}
const result = addTwoNumbers(3 , 5) /// given values are arguments

//console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh"))


