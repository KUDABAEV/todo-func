import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form">
        <input className="new-todo" placeholder="Task" />
        <input className="new-todo-form__timer" placeholder="Min" />
        <input className="new-todo-form__timer" placeholder="Sec" />
      </form>
    </header>
  );
};

export default Header;
