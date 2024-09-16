let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
        tasks.push(taskInput.value);
        taskInput.value = '';
        renderTasks();
    } else {
        alert('Please enter a task');
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newTask = prompt('Edit your task', tasks[index]);
    if (newTask !== null && newTask.trim() !== '') {
        tasks[index] = newTask;
        renderTasks();
    }
}

renderTasks();
