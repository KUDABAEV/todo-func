import React from 'react';
import './footer.css';

const Footer = (props) => {
  const countTasksActive = props.tasks.filter((t) => t.isDone === false).length;

  return (
    <footer className="footer">
      <span className="todo-count">{countTasksActive} items left</span>
      <ul className="filters">
        <li>
          <button className={props.filter === 'all' ? 'selected' : ''} onClick={() => props.changeFilter('all')}>
            All
          </button>
        </li>
        <li>
          <button className={props.filter === 'active' ? 'selected' : ''} onClick={() => props.changeFilter('active')}>
            Active
          </button>
        </li>
        <li>
          <button
            className={props.filter === 'completed' ? 'selected' : ''}
            onClick={() => props.changeFilter('completed')}
          >
            Completed
          </button>
        </li>
      </ul>
      <button onClick={() => props.onDeleteCompletedTodos()} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
