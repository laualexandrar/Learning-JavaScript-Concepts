function greeting() {
    let username = 'Sofia';
    function displayUserName() {
        return `Hello ${username}`;
      }
      return displayUserName;
    }

const g = greeting();
console.log(g); 
console.log(g());
