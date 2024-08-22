import React from 'react';
import { formatDistanceToNow } from 'date-fns';

function EditableInput(props) {
  const [title, setTitle] = React.useState(props.title || '');
  const onChangeTitleHandler = (e) => setTitle(e.currentTarget.value);

  const onKeyDownEditHandler = (event) => {
    if (event.key !== 'Enter') return;

    if (title.trim() !== '') {
      props.changeTaskEditTitle(title);
      props.editModeToggle();
    }
  };
  return (
    <input
      value={title}
      className="edit"
      onBlur={props.editModeToggle}
      onKeyDown={onKeyDownEditHandler}
      type="text"
      onChange={onChangeTitleHandler}
    />
  );
}

function Task(props) {
  const [editMode, setEditMode] = React.useState(false);

  const editModeToggle = () => {
    setEditMode(!editMode);
  };

  return editMode ? (
    <EditableInput
      title={props.title}
      changeTaskEditTitle={props.changeTaskEditTitle}
      editModeToggle={editModeToggle}
    />
  ) : (
    <li className={props.isDone ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={props.changeStatusHandler} checked={props.isDone} />
        <label onClick={props.fix} onKeyDown={props.fix}>
          <span className="title">{props.title}</span>
          <span className="description">
            <button
              onClick={() => props.toggleTimer(props.id)}
              className={props.isRun ? 'icon icon-pause' : 'icon icon-play'}
            ></button>
            {String(Math.floor(props.totalSeconds / 60)).padStart(2, '0')}:
            {String(props.totalSeconds % 60).padStart(2, '0')}
          </span>
          <span className="description">{`created ${formatDistanceToNow(props.created, {
            includeSeconds: true,
            addSuffix: true,
          })}`}</span>
        </label>
        <button onClick={editModeToggle} className="icon icon-edit"></button>
        <button onClick={props.removeTaskHandler} className="icon icon-destroy"></button>
      </div>
    </li>
  );
}

export default Task;
