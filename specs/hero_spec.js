const assert = require("assert");
const Hero = require("../hero.js");
const Task = require("../task.js");
const Food = require("../food.js");


describe("Hero test", function(){

  let hero1;
  let task1;
  let tasks2;
  let tasks3;
  let food1;
  let food2;
  let food3;

  beforeEach(function(){
    hero1 = new Hero("Lancelot", food1);
    task1 = new Task("Find sword", 5, 10, "banquet");
    task2 = new Task("Find shield", 3, 5, "wine");
    task3 = new Task("Defeat dragon", 10, 8, "gold");
    food1 = new Food("Cheese sandwich", 10);
    food2 = new Food("ham sandwich", 10);
    food3 = new Food("Cheese sandwich", 8);
  })

  it("hero has name", function(){
    assert.strictEqual(hero1.name, "Lancelot");
  })

  it("hero has no tasks to begin", function(){
    assert.strictEqual(hero1.tasks.length, 0);
  })

  it("hero can talk", function(){
    assert.strictEqual(hero1.talk(), "Hello, my name is Lancelot");
  })

  it("hero can add tasks", function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    assert.strictEqual(hero1.tasks.length, 2);
  })

  it("can detect favourite food", function(){
    assert.strictEqual(hero1.isFoodFavourite(food3), true)
  })

  it("hero can eat fav food", function(){
    hero1.health = 50;
    hero1.eat(food3);
    assert.strictEqual(hero1.health, 62);
  })

  it("hero can eat non-fav food", function(){
    hero1.health = 50;
    hero1.eat(food2);
    assert.strictEqual(hero1.health, 60);
  })

  it("can mark task as completed", function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.setCompleted(task1);
    assert.strictEqual(task1.completed, true);
    assert.strictEqual(task2.completed, false);
  });

  it("can sort tasks on difficulty", function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.sortTasks("difficulty");
    assert.deepEqual(hero1.tasks, [task2, task1, task3]);
  })

  it("can sort tasks on urgency", function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.sortTasks("urgency");
    assert.deepEqual(hero1.tasks, [task2, task3, task1]);
  })

  it("can sort tasks on reward", function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.sortTasks("reward");
    assert.deepEqual(hero1.tasks, [task1, task3, task2]);
  })

  it("can sort tasks on task name", function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.sortTasks("taskname");
    assert.deepEqual(hero1.tasks, [task3, task2, task1]);
  })



})
