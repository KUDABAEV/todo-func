import React from 'react';
import Task from '../Task/Task';
import './todo-list.css';

const TodoList = (props) => {
  const fix = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <ul className="todo-list">
      {props.tasks.map((task) => {
        const changeStatusHandler = (event) => {
          props.changeStatus(task.id, event.currentTarget.checked);
        };
        const removeTaskHandler = () => {
          props.removeTask(task.id);
        };

        const onChangeTitleHandler = (newValue) => {
          props.changeTaskEditTitle(task.id, newValue);
        };

        return (
          <Task
            key={task.id}
            {...task}
            changeStatusHandler={changeStatusHandler}
            removeTaskHandler={removeTaskHandler}
            toggleTimer={props.toggleTimer}
            fix={fix}
            changeTaskEditTitle={onChangeTitleHandler}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
