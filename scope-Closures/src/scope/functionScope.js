function greeting() {
    let userName = 'Ana';
    console.log(userName);
    if(userName === 'Ana') {
        console.log(`Hello ${userName}!`)
    }
}

greeting();
console.log(userName);//it doesn't work. that variable is functioned scoped. you'll get a reference error
// all var, let and const are function scope