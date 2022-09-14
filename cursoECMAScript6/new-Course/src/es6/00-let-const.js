var lastName = 'Rios';
lastName = 'Rojas';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
// animal = 'Cat'  //error I cannot reassign a const
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'banana'
    }
    console.log(fruit1); //fruit1 is function scoped
    console.log(fruit2);//error fruit2 is block scoped
    console.log(fruit3);// error fruit3 is block scoped
}

fruits();


