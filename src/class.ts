// ! OOP >>> Class and object


// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     };

//     makeSound() {
//         console.log(`The ${this.name} is making sound ${this.sound} and species is ${this.species}.`);
//     };
// };



// * Parameter Properties

class Animal {
    constructor(public name: string, public species: string, public sound: string) {
    };

    makeSound() {
        console.log(`The ${this.name} is making sound ${this.sound} and species is ${this.species}.`);
    };
};

const dog = new Animal("Tiger", "Deshi", "Ghew Ghew");

const cat = new Animal("Billu", "Pure Deshi", "Mewa Mewa");

// console.log(dog.name);
// console.log(dog.species);
// console.log(dog.sound);

// console.log(cat.name);
// console.log(cat.species);
// console.log(cat.sound);

dog.makeSound();
cat.makeSound();
