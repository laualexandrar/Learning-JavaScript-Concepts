

class User4 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak() {
        return 'Hi';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const pepexyz = new User4('Davin', 23);
console.log(pepexyz.uAge);
console.log(pepexyz.uAge = 20)