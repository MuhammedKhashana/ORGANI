// const tasks = []

// function addTask(newTask) {
//     tasks.push(newTask);
// }

// function isCompleted({ id, statu }) {
//     const objIndex = tasks.findIndex(task => task.id == id);
//     tasks[objIndex].data.isCompleted = statu;
// }


// function editTask({ id, newTitle, newPriority, newDate }) {
//     const objIndex = tasks.findIndex(task => task.id == id);
//     tasks[objIndex].data.title = newTitle;
//     tasks[objIndex].data.priority = newPriority;
//     tasks[objIndex].data.date = newDate;
// }

// function deleteTaskX(idToDelete) {
//     tasks.concat(tasks.filter((task) => task.id !== idToDelete)).splice(tasks.length/2, tasks.length)
// }

// export {
//     tasks,
//     addTask,
//     editTask,
//     isCompleted,
//     deleteTaskX
// }

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

function addTask(newTask) {
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function isCompleted({ id, statu }) {
    const objIndex = tasks.findIndex((task) => task.id == id);
    tasks[objIndex].data.isCompleted = statu;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function editTask({ id, newTitle, newPriority, newDate }) {
    const objIndex = tasks.findIndex((task) => task.id == id);
    tasks[objIndex].data.title = newTitle;
    tasks[objIndex].data.priority = newPriority;
    tasks[objIndex].data.date = newDate;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTaskX(idToDelete) {
    tasks.splice(
        tasks.findIndex((task) => task.id == idToDelete),
        1,
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export { tasks, addTask, editTask, isCompleted, deleteTaskX };