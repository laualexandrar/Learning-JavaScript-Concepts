function fruits() {
    if(true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
        console.log(fruit2); // here it prints
        console.log(fruit3); // here it prints
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits() // this throw an error. it prints fruit1  because var isn't block scoped
 //but let and const are block scoped so I can't call them outside of the block I declared them and assigned them
