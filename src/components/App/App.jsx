import React from 'react';
import { v1 } from 'uuid';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './app.css';

const App = () => {
  const [tasks, setTasks] = React.useState([
    {
      id: v1(),
      title: 'Batman',
      isDone: true,
      created: new Date(2024, 6, 8, 18),
      minutes: 2,
      seconds: 3,
      isRun: false,
      totalSeconds: 2 * 60 + 3,
    },
    {
      id: v1(),
      title: 'Spider Man',
      isDone: false,
      created: new Date(),
      minutes: 1,
      seconds: 3,
      isRun: false,
      totalSeconds: 1 * 60 + 3,
    },
    {
      id: v1(),
      title: 'Titanic',
      isDone: false,
      created: new Date(),
      minutes: 3,
      seconds: 5,
      isRun: false,
      totalSeconds: 3 * 60 + 5,
    },
  ]);

  function removeTask(id) {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  }
  function changeFilter(value) {
    setFilter(value);
  }

  const timerTick = () => {
    setTasks((prevState) =>
      prevState.map((timer) =>
        timer.isRun
          ? {
              ...timer,
              totalSeconds: timer.totalSeconds > 0 ? timer.totalSeconds - 1 : timer.totalSeconds,
              isDone: timer.totalSeconds <= 0 ? true : timer.isDone,
              isRun: timer.totalSeconds <= 0 ? false : timer.isRun,
            }
          : timer
      )
    );
  };

  const toggleTimer = (id) => {
    setTasks((prevTimers) => {
      return prevTimers.map((timer) => {
        if (timer.id === id) {
          return {
            ...timer,
            isRun: !timer.isRun,
          };
        }
        return timer;
      });
    });
  };

  React.useEffect(() => {
    const idInterval = setInterval(() => {
      timerTick();
    }, 1000);

    return () => {
      clearInterval(idInterval);
    };
  }, []);

  function addTask({ title, minutes, seconds }) {
    const totalSecondsTask = minutes * 60 + seconds;
    const newTask = {
      id: v1(),
      title,
      isDone: false,
      created: new Date(),
      minutes,
      seconds,
      totalSeconds: totalSecondsTask,
    };
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function changeTaskEditTitle(id, newTitle) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.title = newTitle;
      setTasks([...tasks]);
    }
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
      <Header addTask={addTask} />
      <Main
        tasks={filteredTasks}
        removeTask={removeTask}
        changeFilter={changeFilter}
        filter={filter}
        changeStatus={changeStatus}
        onDeleteCompletedTodos={onDeleteCompletedTodos}
        toggleTimer={toggleTimer}
        changeTaskEditTitle={changeTaskEditTitle}
      />
    </div>
  );
};

export default App;
