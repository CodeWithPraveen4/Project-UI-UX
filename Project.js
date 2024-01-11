function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        // Create a new task item
        var taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.textContent = taskInput.value;

        // Add the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }
}