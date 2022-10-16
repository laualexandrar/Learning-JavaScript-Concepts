//setTimeOut 
function greetingPeople(name, phrase) {
    console.log(`Hello ${name}, ${phrase}`);
}

setTimeout(greetingPeople, 1000, "Paco", "How are you doing");
setTimeout(greetingPeople, 3000, "Paula", "Are you feeling better?");
setTimeout(greetingPeople, 2000, "Pedrito", "You arrived early");
setTimeout(greetingPeople, 2500, "Patricia", "are you with Pedro?");
setTimeout(greetingPeople, 4000, "Patricio", "Patricio is very late, please come back next week");

setTimeout(function(){
    console.log("This is to remind you that we are learning setTimeout");
},2000);

//callback

function subtraction(num1, num2, num3) {
    return num1 - num2 - num3;
}
function sum(num1, num2, num3) {
    return num1, num2 + num3;
}
function multiplication(num1, num2, num3) {
    return (num1 * num2) * num3;
}
function division(num1, num2) {
    return (num1 / num2);
}

function calc(num1, num2, num3, callback) {
    return callback(num1,num2,num3);
}

console.log(calc(5,4,2, sum));
console.log(calc(5,4,2, subtraction));
console.log(calc(2,3,2, multiplication));
console.log(calc(10, 5, 0, division));

//Generators
function* generateId() {
    let id = 1;
    while(true) {
        yield id
        id++
    }
}

const userId = generateId();

console.log(userId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);
console.log(userId.next().value);

const userId2 = generateId();
console.log(userId2.next().value);
console.log(userId2.next().value);
console.log(userId2.next().value);
console.log(userId2.next().value);


function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}
const myArrayOfThings = iterate(["Desktop", "Laptop", "Mouse", "Bottle", "Window"]);
console.log(myArrayOfThings.next().value);
console.log(myArrayOfThings.next().value);
console.log(myArrayOfThings.next().value);
console.log(myArrayOfThings.next().value);
console.log(myArrayOfThings.next().value);
console.log(myArrayOfThings.next().value);
console.log(myArrayOfThings.next().value);
console.log(myArrayOfThings.next().value);

//promises
const users = 100000;
const numberOfUsers = new Promise(function(resolve, reject) {
    if(users > 10000) {
        resolve ("Enough users");
    } else {
        reject ("not enough users");
    }
});

numberOfUsers.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));