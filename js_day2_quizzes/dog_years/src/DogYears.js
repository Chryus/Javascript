  //create an object called dog
//it should have 3 functions, ageInYears, ageInDays, ageInDogYears

//Animal class
var year = function () {
    var date = new Date();
    return date.getFullYear();
};

function Animal() {
    this.birthYear = Math.floor(Math.random() * (2013 - 1985 + 1) + 1985);
    this.age = year() - this.birthYear;
}

Animal.prototype.eat = function (food) {
    console.log("munch munch munch " + food);
};


//define the Dog class
function Dog() {
    //call the parent constructor
    Animal.call(this);
}

//inherit Animal
Dog.prototype = new Animal();

// correct the constructor pointer because it points to Animal
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

// var myDog = new Dog();


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
