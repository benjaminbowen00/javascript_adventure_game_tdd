const Food = function(foodName, replenishmentValue){
  this.foodName = foodName;
  this.replenishmentValue = replenishmentValue;
  this.poisoned = false;
}

// Food.prototype.compare = function(food1, food2) {
//   if ( food1.foodName < food2.foodName)
//     return -1;
//   if (food2.foodName > food1.foodName)
//     return 1;
//   return 0;
// }

Food.prototype.equals = function(food) {
  return this.foodName.toLowerCase() === food.foodName.toLowerCase();
}

food1 = new Food("Cheese sandwich", 10);
food2 = new Food("Ham sandwich", 5);
food3 = new Food("Cheese sandwich", 7);

console.log(food1.equals(food3));
console.log(food1.equals(food2));

module.exports = Food;
