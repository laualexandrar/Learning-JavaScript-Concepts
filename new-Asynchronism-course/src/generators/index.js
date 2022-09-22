function* gen() {
    yield  1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(['Omar', 'Ana', 'Lucia', 'Juana']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


//.....
function* simpleGenerator() {
    console.log("Before 1")
    yield 1
    console.log("after 1")
    console.log("before 2")
    yield 2
    console.log("after 2")
    console.log("before 3")
    yield 3
    console.log("after 3")
}

const generatorObject = simpleGenerator()
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())// undefined

// it creates and object with a value and with the state that is called "done" and can be true or false
// if done is true means the generator finished and if its false means that still there's some info in the generator that hasn't been executed.

//...

//Multiple generators
function* simpleGenerator1() {
    console.log("Before 1")
    yield 1
    console.log("after 1")
    console.log("before 2")
    yield 2
    console.log("after 2")
    console.log("before 3")
    yield 3
    console.log("after 3")
}

const generatorObject2 = simpleGenerator1()
console.log(generatorObject2.next())
console.log(generatorObject2.next())
const generatorObject3 = simpleGenerator()
console.log(generatorObject3.next())
console.log(generatorObject3.next())

//.. generator are useful to create identifiers

function* generateId() {
    let id = 1
    while(true) {
        yield id
        id++
    }
}
const generateObj = generateId()
console.log(generateObj.next())
console.log(generateObj.next())
console.log(generateObj.next())
console.log(generateObj.next())
console.log(generateObj.next())
console.log(generateObj.next())
console.log(generateObj.next())
console.log(generateObj.next())
// to start again I van create another generator 
const generateObj2 = generateId()
console.log(generateObj2.next())
console.log(generateObj2.next())
console.log(generateObj2.next())
console.log(generateObj2.next())


// iterators

// while(Object.next().done !== false) {
//     sadadad
// }

//...

function* generator(array) {
    for(let i = 0; i < array.length; i++) {
        yield array[i];
    }
}

const generatorObj4 = generator([1,3,5]);
console.log(generatorObj4.next())
console.log(generatorObj4.next())
console.log(generatorObj4.next())
console.log(generatorObj4.next())

//...
function* generateId2() {
    let id = 1
    while(true) {
        const increment = yield id
        if(increment != null) {
            id += increment
        } else {
            id++
        }
    }
}
const generateObj5 = generateId2()
console.log(generateObj5.next())
console.log(generateObj5.next(4))// i can add a value only in the second interator
console.log(generateObj5.next())
console.log(generateObj5.next())
// to start again I van create another generator 
const generateObj6 = generateId2()
console.log(generateObj6.next())
console.log(generateObj6.next())
console.log(generateObj6.next())
console.log(generateObj6.next())

// if I need exit the generator prematurely, I can use a return for example in the last example:
// I could say console.log(generateObj6.return(10)) that returns the number but the value is undefined and the generator exits immediately 