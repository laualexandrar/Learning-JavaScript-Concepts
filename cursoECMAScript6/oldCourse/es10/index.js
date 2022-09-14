let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value =>[value, value*2]));

//espacios al inicio
let hello = '           hello world';
console.log(hello);
console.log(hello.trimStart());

//spacios al final
let hello = 'hello world      ';
console.log(hello);
console.log(hello.trimEnd());

//entries
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));


let mySymbl = `my Symblol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);