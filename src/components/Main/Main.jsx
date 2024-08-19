import React from 'react';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';
import './main.css';

const Main = (props) => {
  return (
    <section className="main">
      <TodoList tasks={props.tasks} removeTask={props.removeTask} changeStatus={props.changeStatus} />
      <Footer
        tasks={props.tasks}
        changeFilter={props.changeFilter}
        filter={props.filter}
        onDeleteCompletedTodos={props.onDeleteCompletedTodos}
      />
    </section>
  );
};

export default Main;
