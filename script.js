function addTask() {
    let taskInput = document.getElementById('taskInput')
    let taskList = document.getElementById('taskList')

    if(taskInput.value.trim() !==''){
        let taskItem = document.createElement('li')
        taskItem.textContent = taskInput.value;
        taskItem.innerHTML += '<span class="delete" onclick="removeTask(this)">❌</span>';
        taskList.appendChild(taskItem)
        taskInput.value = ''
    } else {
        alert('Please enter a task!')
    }
}
function removeTask(task) {
    task.parentNode.remove();
}