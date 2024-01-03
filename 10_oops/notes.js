//javascript and classes

//4 Pillars of OOPS

// 1) Encapsulation : Encapsulation in JavaScript is achieved through closures and object properties.

// Encapsulation
function Car(brand, model) {
    let fuelLevel = 100;

    this.brand = brand;
    this.model = model;

    this.drive = function(distance) {
        if (fuelLevel >= distance) {
            console.log(`The ${this.brand} ${this.model} is driving.`);
            fuelLevel -= distance;
        } else {
            console.log("Not enough fuel to drive.");
        }
    };
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.brand); // Output: Toyota
myCar.drive(50); // Output: The Toyota Camry is driving.

// Abstraction : Abstraction in JavaScript involves hiding the complex implementation details.




//Inheritance: Inheritance in JavaScript is achieved using prototypes.

//Polymorphism: Polymorphism in JavaScript allows objects of different types to be treated as objects of a common type.