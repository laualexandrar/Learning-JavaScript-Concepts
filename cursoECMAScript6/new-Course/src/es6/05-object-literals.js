//enhanced object literals
function newUser(user, age,country, uId) {
    return {
        user,
        age,
        country,
        id:uId,
    }
}
console.log(newUser("dfgfdg", 23, 'MX', 1));