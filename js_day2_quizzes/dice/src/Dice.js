function Dice(value) {
 this._val = value;
}

Dice.prototype.roll = function fn1() {
  return Math.random() * 6;
}