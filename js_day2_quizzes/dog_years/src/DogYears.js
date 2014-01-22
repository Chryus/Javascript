//create an object called dog
//it should have 3 functions, ageInYears, ageInDays, ageInDogYears

var birthYear = function() {
  return Math.floor(Math.random() * (2013 - 1914 + 1) + 1914);
};
var year = function() {
  var date = new Date();
  return date.getFullYear();
};

function Dog() {
  this.age = year() - birthYear();
}

Dog.prototype.ageInYears = function fn2() {
  return this.age
}

Dog.prototype.ageInDays = function fn3() {
  return this.ageInYears() * 365;
}

Dog.prototype.ageInDogYears = function fn4() {
  return this.ageInYears() * 7;
}
