  //create an object called dog
//it should have 3 functions, ageInYears, ageInDays, ageInDogYears

//Animal class
// var year = function () {
//     var date = new Date().get;
//     return date.getFullYear();
// };

//animal constructor
function Animal() {
    this.birthYear = Math.floor(Math.random() * (2013 - 1985 + 1) + 1985);
    this.age = new Date().getFullYear() - this.birthYear;
}

//animal object functions
//put the methods here because if we put them in the constructor
//each new animal we create will get a function and that's bad for memory
//we just want it to inherit a reference to a method so we use prototype below
Animal.prototype.eat = function (food) {
    console.log("munch munch munch " + food);
};

Animal.prototype.bithYear = function() {
  return Math.floor(Math.random() * (2013 - 1985 + 1) + 1985);
}


//define the Dog class
//this whole function is a constructor
function Dog() {
    //call the parent constructor
    Animal.call(this);
}

//inherit Animal
//the protoypte of a dog is an animal all dogs have a basic understanding of dinosaur
Dog.prototype = new Animal();

// correct the constructor pointer because it points to Animal
// we wanted everything in from the animal besides the constructor
Dog.prototype.constructor = Dog;

//these are object methods!
Dog.prototype.ageInYears = function () {
    return this.age;
};

Dog.prototype.ageInDays = function () {
    return this.ageInYears() * 365;
};

Dog.prototype.ageInDogYears = function () {
    return this.ageInYears() * 7;
};

var myDog = new Dog();



// > var myDog = new Dog();
// undefined
// > myDog
// { age: 45 }
// > var yourDog = new Dog();
// undefined
// > yourDog
// { age: 54 }
// > var hisDog = new Dog();
// undefined
// > hisDog
// { age: 69 }
// > hisDog.ageInDogYears();
// 483
// > hisDog.name;
// undefined
// > hisDog;
// { age: 69 }
