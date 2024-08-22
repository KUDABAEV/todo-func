import { v1 } from 'uuid';

export const saveState = (state) => {
  localStorage.setItem('todo-app-state', JSON.stringify(state));
};

export const getInitState = () => {
  const stateJson = localStorage.getItem('todo-app-state');

  const defaultState = [
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
  ];

  if (stateJson) {
    try {
      const state = JSON.parse(stateJson);
      if (state.length > 0) {
        return state;
      }
    } catch (e) {
      return defaultState;
    }
  }

  return defaultState;
};
