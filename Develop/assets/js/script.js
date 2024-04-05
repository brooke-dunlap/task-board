// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));


// Todo: create a function to generate a unique task id
function generateTaskId() {
    const timestamp = new Date().getTime();
    const taskId = 'task_' + timestamp;
    return taskId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  
}



// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    
}


// Todo: create a function to handle adding a new task
function handleAddTask(event){
    //get inputs then check if inputs are blank, if not, then generate object for task, then you can pass that to creattaskcard
    event.preventDefault();

    const taskInput = $();
    const tasDescription = taskInput.value;

    if (!itaskDescription){
        alert('Please do not leave the field blank');
        return;
    }

    const newTask ={
        id: generateTaskId(),
        description: taskDescription,
        completed:
    }
}

    
// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
   
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    
});
