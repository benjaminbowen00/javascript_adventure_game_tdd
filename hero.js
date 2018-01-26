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

Hero.prototype.eat = function(food){
  var multiplier = 1;
  if (this.isFoodFavourite(food)){multiplier = 1.5;}
  this.health += multiplier * food.replenishmentValue;
  if(this.health > 100){ this.health = 100;}
}

Hero.prototype.isFoodFavourite = function(food){
  return this.favouriteFood.equals(food);
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
  switch(attribute.toLowerCase()){
    case "taskname" : this.tasks.sort(compareTaskName);
    break;
    case "difficulty" : this.tasks.sort(compareDifficulty);
    break;
    case "urgency" : this.tasks.sort(compareUrgency);
    break;
    case "reward" : this.tasks.sort(compareReward);
    break;
  }
}


module.exports = Hero;
