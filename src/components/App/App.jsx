import React from 'react';
import { v1 } from 'uuid';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './app.css';

const App = () => {
  const [tasks, setTasks] = React.useState([
    { id: v1(), title: 'Batman', isDone: true, created: new Date(2024, 6, 8, 18) },
    { id: v1(), title: 'Spider Man', isDone: false, created: new Date() },
    { id: v1(), title: 'Titanic', isDone: false, created: new Date() },
  ]);

  function removeTask(id) {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  }
  function changeFilter(value) {
    setFilter(value);
  }

  function changeStatus(taskId, isDone) {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }
    setTasks([...tasks]);
  }

  function onDeleteCompletedTodos() {
    const tasksCompleted = tasks.filter((t) => t.isDone !== true);
    setTasks(tasksCompleted);
  }

  const [filter, setFilter] = React.useState('all');

  let filteredTasks = tasks;

  if (filter === 'completed') {
    filteredTasks = filteredTasks.filter((t) => t.isDone === true);
  }

  if (filter === 'active') {
    filteredTasks = filteredTasks.filter((t) => t.isDone === false);
  }

  return (
    <div className="todoapp">
      <Header />
      <Main
        tasks={filteredTasks}
        removeTask={removeTask}
        changeFilter={changeFilter}
        filter={filter}
        changeStatus={changeStatus}
        onDeleteCompletedTodos={onDeleteCompletedTodos}
      />
    </div>
  );
};

export default App;
