var a; // declaration
var b = 'b'; //assigning
bb = 'bb'; //reassign
var a = 'aa';//redeclare (because we already declare a var called a)

//Global Scope
var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}
bestFruit();

function countries() {
    country = 'Colombia' // global... I'm not saying that this is a var let or const
    console.log(country);
}
countries()
console.log(country);

//var is global scope