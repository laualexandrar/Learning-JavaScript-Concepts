class User {
    greeting(){
        return 'Hello';
    }
};
 const gndx = new User();
 console.log(gndx.greeting());
 const pedrox = new User();
 console.log(pedrox.greeting);

 //constructor

 class User2 {
    constructor(name){
        console.log('new user');
    }
    asking() {
        return 'what?';
    }
 }

 const petunia = new User2();

 class User3 {
    constructor(name){
        console.log('new user');
        this.name = name;
    }
    speak() {
        return 'Hello!';
    }
    saying() {
        return `${this.speak()} ${this.name}`
    }
 }

 const ana = new User3('Ana');
console.log(ana.saying());

class User4 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hi';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const pepexyz = new User4('Davin', 23);
console.log(pepexyz.uAge);
console.log(pepexyz.uAge = 20)