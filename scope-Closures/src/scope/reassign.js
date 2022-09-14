//var
var firstName; //undefined - declare
firstName = 'Pepe'; //assign
console.log(firstName)

var lastName = 'Lopez'; //declaring
lastName = 'Martinez'; // reassigning
console.log(lastName); 

var middleName = 'Patricio'; // declaring
var middleName = 'ana'; //redeclare
console.log(middleName);

//let
let fruit = 'Apple'; //declare and assign
fruit = 'Kiwi' // I can reassign with let
console.log(fruit);
//let fruit = 'Banana'; // I can't redeclare with let
console.log(fruit);

//const

const animal = 'Dog';
//animal = 'cat';
//console.log(animal); //this throws an error, I can't reassign a const
//const animal = 'Bear'; // I can't redeclare a const

const vehicles = []
vehicles.push ('BMW');
vehicles.push ('Toyota');
console.log(vehicles);

vehicles.pop('Toyota');
console.log(vehicles); // I can update things inside the arrays with const 
// but I can't reassign or redeclare  the const = vehicles  