const name = "Arjit"
const repoCount = "50"
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hiteshc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.substring(0,4));

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString = '     hitesh.     '
console.log(newString)
console.log(newString.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))