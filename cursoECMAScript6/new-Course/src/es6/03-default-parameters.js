function newUser(name, age, country) {
        var name = name || "pepa";
        var age = age || 32;
        var country = country || 'MX'
        console.log(name, age, country);
}
newUser();
newUser('Patricio', 15, 'CO')

//es6
function newAdmin(name = 'Ramiro', age = 22, country = 'CO') {
    console.log(name,age,country);
}
newAdmin();
newAdmin('Ana', 23, 'MX');