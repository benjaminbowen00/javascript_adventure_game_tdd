const assert = require("assert");
const Food = require("../food.js");


describe("Food", function(){

  let food1;
  let food2;
  let food3;

beforeEach(function(){
  food1 = new Food("Cheese sandwich", 10);
  food2 = new Food("Ham sandwich", 5);
  food3 = new Food("Cheese sandwich", 7);
})

it("can compare food when the same", function(){
  let foodBoolean = food1.equals(food3);
  assert.strictEqual(foodBoolean, true )
})

it("can compare foods when not the same", function(){
  let foodBoolean = food1.equals(food2);
  assert.strictEqual(foodBoolean, false )
})

})
