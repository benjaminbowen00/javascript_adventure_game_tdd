const Task = function(taskName, difficultyLevel, urgencyLevel, reward){
  this.taskName = taskName;
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completed = false;
}

function compareDifficulty(task1, task2) {
  return task1.difficultyLevel - task2.difficultyLevel;
}



module.exports = Task;
