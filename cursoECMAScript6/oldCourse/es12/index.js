const string = " JavaScript es genial, con JavaScript puedo crear el futuro de la Web! ";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

class Message {
    #show(val) {
        console.log(val);
    };
    get #add(val){
        
    }
}

const message = new Message();
message.show('Hi');

//promise any


const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

//
class anyClass{
    constructor(element){
    this.ref = new WeakRef(element)
    }
    //{...}
}


