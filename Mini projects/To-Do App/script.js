// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Create a new list item
    var li = document.createElement("li");
    li.textContent = taskInput.value;

    // Append the new item to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}