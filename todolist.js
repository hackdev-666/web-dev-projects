let taskList = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        taskList.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
}

function removeTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskListEl = document.getElementById('taskList');
    taskListEl.innerHTML = '';
    taskList.forEach((task, index) => {
        const taskEl = document.createElement('li');
        taskEl.className = task.completed ? 'completed' : '';
        taskEl.innerHTML = `
            <span>${index + 1}. ${task.text}</span>
            <div>
                <button onclick="toggleTask(${index})">✔</button>
                <button onclick="removeTask(${index})">✖</button>
            </div>
        `;
        taskListEl.appendChild(taskEl);
    });
}

document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
