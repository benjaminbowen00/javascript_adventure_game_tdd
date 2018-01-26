const Rat = function(name){
  this.name;
}

Rat.prototype.touchFood = function (food) {
  food.poisoned = true;
};

module.exports = Rat;
