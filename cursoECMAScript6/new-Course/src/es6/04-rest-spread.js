// ARRAYS DESTRUCTURING
let fruits = ['apple', 'Banana'];
let[a,b] = fruits;
console.log(a, fruits[1]);

//object destructuring

let user = {username:'Olivia', age:34};
let {username, age} = user;
console.log(username, user.age);


//spread operator
let person = {name:'oscar', age: 28};
let country = 'MX';

let data = {...person, country};
console.log(data);

//rest

function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0]);
    return num + values[0];
}

sum(2, 2, 3, 3, 4, 4)