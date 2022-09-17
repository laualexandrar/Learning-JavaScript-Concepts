function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(['Pepa', 'Patricio', 'Ulises', 'Martha']);

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
