// console.log(dogName);
// var dogName = 'Taquito'; // undefined because I am declaring a var after I call it
// console.log(dogName);


dogName();

function dogName() {
    console.log(`The best dog is ${elmo}`)// The best dog is undefined, The function is executed but the var hasn't been assigned yet
}

var elmo = 'elmo'; 