function sum (num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2,2,sum));

setTimeout(function(){
    console.log('Hello JS')
},2000);//funcion anonima

function greeting(name, age){
    console.log(`hola ${name} you have ${age} years`);
}

setTimeout(greeting, 2000, 'Pedro', 22)

//........ Here I create different functions. Then I create a function called calculate with a callback in it.
// this callback takes the name of the functions that I already created and then I execute them   

function sum1(num1, num2) {
    return num1 + num2;
}
function rest(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}

function calculate(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calculate(3,4, sum1));
console.log(calculate(5,3, div));
console.log(calculate(8,3, rest));
console.log(calculate(2, 2, mult));