document.addEventListener("DOMContentLoaded", function () {
    // Array to store tasks
    let tasks = [];

    // Function to render tasks
    function renderTasks() {
        const taskList = document.getElementById("task-list");
        taskList.innerHTML = "";

        tasks.forEach(function (task, index) {
            const taskItem = document.createElement("div");
            taskItem.classList.add("task");
            taskItem.innerHTML = `
                <span>${task.text}</span>
                <span>Priority: ${task.priority}</span>
                <span>Deadline: ${task.deadline}</span>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    // Function to add a new task
    window.addTask = function () {
        const taskInput = document.getElementById("task-input");
        const prioritySelect = document.getElementById("priority-select");
        const deadlineInput = document.getElementById("deadline-input");

        const newTask = {
            text: taskInput.value.trim(),
            priority: prioritySelect.value,
            deadline: deadlineInput.value,
        };

        if (newTask.text !== "") {
            tasks.push(newTask);
            taskInput.value = "";
            renderTasks();
        }
    };

    // Function to delete a task
    window.deleteTask = function (index) {
        tasks.splice(index, 1);
        renderTasks();
    };

    // Initial rendering
    renderTasks();
});
