interface Tasks {
  id: string,
  title: string,
  isDone: boolean,
}

const readTasks = () => JSON
  .parse(localStorage.getItem('tasks') || '');

const saveTasks = (tasks: Tasks[]) => localStorage.setItem('tasks', JSON.stringify(tasks));

export const getTasks = () => {
  const prevTasks = readTasks();
  return prevTasks;
};

export const addTasksLocalStorage = (tasks: Tasks[]) => {
  const prevTasks = readTasks();
  saveTasks(tasks);
};

// export const removeTasksLocalStorage = (tasksDeleted: Tasks) => saveTasks(tasksDeleted);
