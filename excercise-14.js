// #### Exercise 14: Object Constructor (Coding)

// Create an **Object Constructor** function named `Animal` (capitalizing the first letter to signify it is an object). The constructor should accept `species` and `sound` as parameters. Use the **`this` keyword** 
// to assign these properties to the object being created.

function Animal(species, sound) {
    this.species = species;
    this.sound = sound;

    this.makeSound = function() {
        console.log(`The ${this.species} goes ${this.sound}`);
    };
}

let dog = new Animal('Dog', 'Woof');
let cat = new Animal('Cat', 'Meow');

dog.makeSound();
cat.makeSound();