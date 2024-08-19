import React from 'react';
import './todo-list.css';

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.tasks.map((task) => {
        const changeStatusHandler = (event) => {
          props.changeStatus(task.id, event.currentTarget.checked);
        };
        const removeTaskHandler = () => {
          props.removeTask(task.id);
        };
        return (
          <li key={task.id} className={task.isDone ? 'completed' : ''}>
            <div className="view">
              <input className="toggle" type="checkbox" onChange={changeStatusHandler} checked={task.isDone} />
              <label>
                <span className="title">{task.title}</span>
                <span className="description">
                  <button className="icon icon-play"></button>
                  <button className="icon icon-pause"></button>
                  12:25
                </span>
                <span className="description">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button onClick={removeTaskHandler} className="icon icon-destroy"></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
