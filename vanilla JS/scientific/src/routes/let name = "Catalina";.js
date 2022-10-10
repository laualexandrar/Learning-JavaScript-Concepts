let name = "Catalina";
let lastName = "Melo";
let platziUser = "CatalinaMelo";
let age = 26;
let email = "catalinaMelo@correo.com"
let adult = true;
let savings  = 100000;
let debt = 30000;

const fullName = name + " " + lastName;
console.log(fullName);

const money = savings - debt;
console.log(money)


const name1 = "Juan David";
const lastName1 = "Castro Gallego";
const completeName = name1 + lastName1;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function phrase (name, lastName, nickname) {
    const completeName = name + " " + lastName;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

phrase("Juan David", "Castro Gallego", "juandc")



const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "Free") {
       console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

for (i=0 ; i <= 5; i++) {
	if(i == 4) {
	console.log("i is equals to " + i);
} else {
console.log(i);
}
}



let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++
}

let i = 10;
while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--
}

let question = prompt("");

while(question <= 100) {
    if(question == 4) {
        console.log("congratulations");
    } else {
        continue;
    }
}

let userPrompt = parseInt(prompt("What's the result of 2 + 2 ?"))

while(userPrompt !== 4) {
  userPrompt = parseInt(prompt("What's the result of 2 + 2 ?"))
}

console.log("congratulations")

const fruits = ["apple", "orange", "banana", "grape"];
const carBrands =["Ford", "Toyota", "Mazda", "BMW", "Audi"];

function myFirstValue(array) {
    console.log(array[0]);
}

myFirstValue(fruits);
myFirstValue(carBrands);

const fruits1 = ["apple", "orange", "banana", "grape"];
const carBrands1 =["Ford", "Toyota", "Mazda", "BMW", "Audi"];
function printEachElement(array) {
     array.forEach(element => {
        console.log(element)
    });
}
printEachElement(fruits1);
printEachElement(carBrands1);


function car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year; 
}

var newCar2 = new car("Tesla", "Model X", 2018);
var newCar3 = new car ("Toyota", "Corolla", 2020);

var carInventory = [];
function printObject(array) {
   array.forEach(element => {
        console.log(element)
    });
}

printObject(newCar2);
printObject(newCar3);





const user = {
    name: 'Lau',
    email: 'lau@example.com',
    age: 20,
    active: true
};

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

let tipoDeSuscripcion1 = {
    Free: "Puedes tomar los cursos gratis",
    Basic: "Puedes tomar todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien mas pueden tomar todos los cursos de Platzi durante un año",

}

const suscripcion = "Expert";

Object.keys(tipoDeSuscripcion1).find(function (plan) {
    if (plan == suscripcion) {
        console.log(tipoDeSuscripcion1[plan]);
    }
})