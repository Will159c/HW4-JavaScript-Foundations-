// #### Exercise 15: Object Instantiation (Coding)

// Using the `Animal` constructor from Exercise 14, create two new instances of objects:

// 1. `dog` (species: "Canine", sound: "Woof")
// 2. `cat` (species: "Feline", sound: "Meow")

// Store both of these new object instances inside an array named `animalArray`.

function Animal(species, sound) {
    this.species = species;
    this.sound = sound;

    this.makeSound = function() {
        console.log(`The ${this.species} goes ${this.sound}`);
    };
}

let dog = new Animal('Canine', 'Woof');
let cat = new Animal('Feline', 'Meow');

let animalArray = [dog, cat];

console.log(animalArray);