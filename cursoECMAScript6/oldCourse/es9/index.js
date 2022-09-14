const obj = {
    name:'oscar',
    age: 32,
    country:'MX'
};

let {name, ...all} = obj;
console.log(name,all)

// let {country, ...all} = obj;
// console.log(all)
// aqui quiero que aparezcan todos menos country

const obj2 = {
    name:'oscar',
    age: 32
}

const obj3 = {
    ...obj2,
    country: 'MX'
}

console.log(obj3) // aqui me une obj 2 con obj3


//promise.finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
         resolve('Hello World')
         reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response =>console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month,year)
