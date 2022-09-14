const data =  {
    frontend: 'Pepito',
    backend: 'Isabel',
    design: 'ana',
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 =  {
    frontend: 'Pepito',
    backend: 'Isabel',
    design: 'ana',
}
const values = Object.values(data2);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '------------'))

//promises
const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);

	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error('Menor a 5')),
		1000
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));

//example #2
function randomDelayed(max = 10, expected = 5, delay =  1000) {
	return new Promise((resolve, reject) => {
		const number = Math.floor(
			Math.random() * max)
		

		setTimeout(
			() => number > expected
				? resolve(number)
				: reject(new Error('número menor al esperado')),
			delay
		);
	});
}

randomDelayed(100, 75, 2500)
    .then(number => console.log(number))
    .catch(error => console.error(error));


    //class promise
const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
        (true)
        ?setTimeout(() => resolve('hello world'), 3000)
        :reject(new Error('Test error'))
    })
};

const helloAsync = async () => {
    const hello  = await helloWorld();
    console.log(hello);
};
helloAsync();

const anotherFunction  = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch(error){
        console.log(error)
    }
}