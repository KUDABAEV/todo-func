import React from 'react';
import Task from '../Task/Task';
import './todo-list.css';

const TodoList = ({ tasks, removeTask, changeStatus, changeTaskEditTitle, toggleTimer }) => {
  const fix = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        const changeStatusHandler = (event) => {
          changeStatus(task.id, event.currentTarget.checked);
        };
        const removeTaskHandler = () => {
          removeTask(task.id);
        };

        const onChangeTitleHandler = (newValue) => {
          changeTaskEditTitle(task.id, newValue);
        };

        return (
          <Task
            key={task.id}
            {...task}
            changeStatusHandler={changeStatusHandler}
            removeTaskHandler={removeTaskHandler}
            toggleTimer={toggleTimer}
            fix={fix}
            changeTaskEditTitle={onChangeTitleHandler}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
