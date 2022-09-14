// in the past
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
}

//es6
function newFunction2(name = 'oscar', age = 32, country = "mx"){
    console.log(name,age,country);
};

newFunction2();
newFunction2('Ricardo', 23, 'Colombia');

//template literals
let hello = "Hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//let, const
//past
let lorem = "Lorem ipsum dolor sit amet.\n" + " otra frase"

//now
let lorem2 = `otra frase que necesitamos
ahora es otra frase epica
`;
console.log(lorem);
console.log(lorem2);


// destructuracion de elementos

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX',
}

console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name, age, country);

let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria','Yesica', 'Camila'];

let education = [ 'david', ...team1, ...team2];
console.log(education);


// arrow functions


let name1 = 'Patricio';
let age = 32;
//es5
obj = {name1: name1, age: age};
console.log(obj);
//es6
obj2 = {name1, age};
console.log(obj2);


const names = [
    {myName: 'Camilo', age: 30},
    {myName: 'Yesica', age:27}
]
let listOfNames = names.map(function(item){
console.log(item.myName)
})
// arrow function
let listOfNames2 = names.map(item => console.log(item.myName))


const listOfNames3 = (name1, age, country) => {
 
}

const listOfNames4 =  aName => { }

const square = num => num * num;

//promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('ups!!')
        }
    });
}

helloPromise()
.then(response => console.log(response))
//.then(() => console.log('hola'))
.catch(error => console.log(error));

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));

//modules
import {hello} from './module';
hello();

//generators