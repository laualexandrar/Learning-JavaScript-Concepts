let numbers = [1,3,4,6,7,8,];

console.log(numbers.includes(9)); // false 9 is not on the list

const list = ["Pedro", "Pacheco", "Maria"];

const newList = list.map(item => item.toLowerCase())
console.log(newList)

console.log(newList.includes('pedro')); // I can use lis.toLoweCase to avoid errors