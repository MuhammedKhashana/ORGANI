const tasks = []

function addTask(newTask) {
    tasks.push(newTask);
}

function isCompleted({ id, statu }) {
    const objIndex = tasks.findIndex(task => task.id == id);
    tasks[objIndex].data.isCompleted = statu;
}


function editTask({ id, newTitle, newPriority, newDate }) {
    const objIndex = tasks.findIndex(task => task.id == id);
    tasks[objIndex].data.title = newTitle;
    tasks[objIndex].data.priority = newPriority;
    tasks[objIndex].data.date = newDate;
}

function deleteTaskX(idToDelete) {
    tasks.concat(tasks.filter((task) => task.id !== idToDelete)).splice(tasks.length/2, tasks.length)
}

export {
    tasks,
    addTask,
    editTask,
    isCompleted,
    deleteTaskX
}