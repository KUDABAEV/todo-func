import React from 'react';
import './header.css';

const Header = (props) => {
  const [title, setTitle] = React.useState('');
  const [inputMinutes, setInputMinutes] = React.useState('');
  const [inputSeconds, setInputSeconds] = React.useState('');

  const onChangeHandler = (event) => {
    setTitle(event.currentTarget.value);
  };

  const addTask = () => {
    if (title.trim() !== '' && inputMinutes >= 0 && inputSeconds >= 0) {
      props.addTask({ title, minutes: Number(inputMinutes), seconds: Number(inputSeconds) });
      setTitle('');
    }
  };

  const onKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const handleMinutesChange = (event) => {
    setInputMinutes(event.currentTarget.value);
  };

  const handleSecondsChange = (event) => {
    setInputSeconds(event.currentTarget.value);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form">
        <input
          value={title}
          className="new-todo"
          placeholder="Task"
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
        <input
          value={inputMinutes}
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={handleMinutesChange}
        />
        <input
          value={inputSeconds}
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={handleSecondsChange}
        />
      </form>
    </header>
  );
};

export default Header;
