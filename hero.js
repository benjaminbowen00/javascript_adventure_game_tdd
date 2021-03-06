const Hero = function(name, favouriteFood){
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasks = [];
}

Hero.prototype.talk = function(){
  return `Hello, my name is ${this.name}`;
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

// Hero.prototype.isFoodFavourite = function(food){
//   return this.favouriteFood.equals(food);
// }

function isFoodFavourite(food){
  return this.favouriteFood.equals(food);
}
// const isFoodFavourite = function(food){
//   return this.favouriteFood.equals(food);
// }

// function poisonedMultiplier(food){
//   // console.log("posioned multiplier context:", this);
//   //context is global - when called from within the hero object
//   //better to have this as a Hero prototype method?
//   return (food.poisoned) ? -1 : 1;
// }

var poisonedMultiplier = function(food){
  return (food.poisoned) ? -1 : 1;
}

function favouriteFoodMultiplier(food){
  console.log("Favourite food multiplier context:", this);
  var isFoodFavouriteBound = isFoodFavourite.bind(this);
  return (isFoodFavouriteBound(food)) ? 1.5 : 1;
}

// Hero.prototype.favouriteFoodMultiplier = function(food){
//   console.log("Favourite food multiplier context:", this);
//   return (this.isFoodFavourite(food)) ? 1.5 : 1;
// }

Hero.prototype.eat = function(food){
  // var favouriteFoodMultiplierBinded = favouriteFoodMultiplier.bind(this);

  var boundFavouriteFoodMultiplier = favouriteFoodMultiplier.bind(this);
  var poisonedFactor = poisonedMultiplier(food);
  var multiplier = boundFavouriteFoodMultiplier(food);
  //OR
  // var multiplier = 1;
  // if (this.isFoodFavourite(food)){multiplier = 1.5;}
  this.health += multiplier * poisonedFactor * food.replenishmentValue;
  healthNotAbove100();
}

function healthNotAbove100(){
  if(this.health > 100){ this.health = 100;}
}

Hero.prototype.setCompleted = function(task){
  var index = this.tasks.findIndex(x => x === task)
  if (index > -1) {
    this.tasks[index].completed = true;
  }
}


function compareTaskName(task1, task2) {
  if(task1.taskName < task2.taskName){return -1;}
  if(task1.taskName > task2.taskName){return 1;}
  else {return 0;}
}
function compareDifficulty(task1, task2) {
  return task1.difficultyLevel - task2.difficultyLevel;
}
function compareUrgency(task1, task2) {
  return task1.urgencyLevel - task2.urgencyLevel;
}
function compareReward(task1, task2) {
  if(task1.reward < task2.reward){return -1;}
  if(task1.reward > task2.reward){return 1;}
  else {return 0;}
}

Hero.prototype.sortTasks = function(attribute){
  let substring = "name"
  if(attribute.toLowerCase().indexOf(substring) != -1){
    this.tasks.sort(compareTaskName);
  }
  else{
    this.sortTasksSwitch(attribute);
  }
}

Hero.prototype.sortTasksSwitch = function(attribute){
  switch(attribute.toLowerCase()){
    case "difficulty" : this.tasks.sort(compareDifficulty);
    break;
    case "urgency" : this.tasks.sort(compareUrgency);
    break;
    case "reward" : this.tasks.sort(compareReward);
    break;
  }
}

Hero.prototype.getIncompleteTasks = function(){
  let array = this.tasks.filter(task => task.completed === false);
  let string = "Tasks to complete:"
  return formTaskStatement(array, string);
}

Hero.prototype.getCompletedTasks = function(){
  array = this.tasks.filter(task => task.completed === true);
  let string = "Tasks completed:"
  return formTaskStatement(array, string);
}

function formTaskStatement(taskArray, startingString){
  var reducer = function(accumulator, value){return accumulator +" "+ value.taskName.toLowerCase()+" and"}
  var outputStatement = taskArray.reduce(reducer, startingString);
  return removeLastFourCharacters(outputStatement);
}

function removeLastFourCharacters(array){
  return array.slice(0, array.length - 4);
}


module.exports = { heroConstructor: Hero,
  // isFoodFavourite: isFoodFavourite(),
  poisonedMultiplier: poisonedMultiplier
//export function for fav food
};
