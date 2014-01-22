//create an object called dog
//it should have 3 functions, ageInYears, ageInDays, ageInDogYears

var date = new Date();
var birth_year = Math.floor(Math.random() * (2013 - 1914 + 1)) + 1914;
var year = date.get_Full_Year;
var age = year - birth_year


function Dog(age) {
  this._age = age ;
}

Dog.prototype.ageInYears = function fn1() {
  return (year - birth_year);
}

Dog.prototype.ageInDays = function fn1() {
  return this.ageInYears * 365;
}

Dog.prototype.ageInDogYears = function fn1() {
  return this.ageInYears * 7;
}

// Dog.prototype.roll = function fn1() {
//   return this._age
