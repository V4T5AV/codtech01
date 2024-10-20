let tasks = [];
let completedTasks = 0;

// Add task on Enter key press
document.getElementById('taskInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  
  if (task) {
    tasks.push({ text: task, completed: false });
    taskInput.value = '';
    renderTasks();
    updateProgress();
  }
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
  updateProgress();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleTaskCompletion(index);

    listItem.textContent = task.text;
    listItem.prepend(checkbox);
    
    if (task.completed) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
    
    taskList.appendChild(listItem);
  });
}

function updateProgress() {
  const completed = tasks.filter(task => task.completed).length;
  const progress = tasks.length === 0 ? 0 : Math.round((completed / tasks.length) * 100);
  
  document.getElementById('progress').textContent = `${progress}%`;
  
  const progressBar = document.getElementById('progressBar');
  progressBar.innerHTML = `<div style="width:${progress}%"></div>`;
}


