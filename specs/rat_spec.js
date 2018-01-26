const assert = require("assert");
const Rat = require("../rat.js");
const Food = require("../food.js");


describe("Rat test", function(){

  let rat1;
  let food1;

  beforeEach(function(){
    rat1 = new Rat("Ratty")
    food1 = new Food("Cheese sandwich", 10);
  })

  it('rat can make food poisoned', function(){
    rat1.touchFood(food1);
    assert.strictEqual(food1.poisoned, true);
  })




})
