const promise = new Promise(function(resolve, reject) {
    resolve('Heyy')
});

const cows = 9;
const countCows = new Promise(function (resolve, reject) {
    if(cows > 10) {
        resolve(`We have ${cows} cows`);
    } else {
        reject('There are not enough cows in the farm')
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error)=> {
    console.log(error);
}).finally(() => console.log('Finally'));