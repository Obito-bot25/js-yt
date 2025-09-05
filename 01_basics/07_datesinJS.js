let myDate = new Date()


let myCreatedDate = new Date(2023,0,23)
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myCreatedDate.getTime());
console.log(Date.now());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

`${newDate.getDate()} and the time `

newDate.toLocaleDateString('default',{
    weekday: "long",
    

})
