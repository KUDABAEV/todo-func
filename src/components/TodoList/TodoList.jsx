import React from 'react';
import { formatDistanceToNow } from 'date-fns';
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
        return (
          <li key={task.id} className={task.isDone ? 'completed' : ''}>
            <div className="view">
              <input className="toggle" type="checkbox" onChange={changeStatusHandler} checked={task.isDone} />
              <label onClick={fix} onKeyDown={fix}>
                <span className="title">{task.title}</span>
                <span className="description">
                  <button
                    onClick={() => props.toggleTimer(task.id)}
                    className={task.isRun ? 'icon icon-pause' : 'icon icon-play'}
                  ></button>
                  {String(Math.floor(task.totalSeconds / 60)).padStart(2, '0')}:
                  {String(task.totalSeconds % 60).padStart(2, '0')}
                </span>
                <span className="description">{`created ${formatDistanceToNow(task.created, {
                  includeSeconds: true,
                  addSuffix: true,
                })}`}</span>
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
