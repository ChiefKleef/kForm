import { v4 } from 'node-uuid';

export const updateHobby = text => ({
  type: 'UPDATE_HOBBY',
  text,
});

const colors = ['#f85538', '#FFAA00', '#6afb2b', '#00E00F', 'white', '#F0FF23', 'red',
  '#8CFFFE', '#14FFBC', '#FF7AF4', '#00AAFF', '#FD1FFB', '#B8A684', '#FFF478',
  '#0051FF', '#AA00FF'];
export const addHobby = text => ({
  type: 'ADD_HOBBY',
  id: v4(),
  color: colors[Math.floor(Math.random() * colors.length)],
  text,
});

export const removeHobby = (id, hobbies) => ({
  type: 'REMOVE_HOBBY',
  id,
  hobbies,
});

export const updateName = (side, text) => ({
  type: 'UPDATE_NAME',
  side,
  text,
});

export const submitLoading = () => ({
  type: 'SUBMIT_LOADING',
});

const greetings = ['Nice', 'Good on you', 'Congrats', 'Hello', 'Ay'];
export const submitSuccess = name => ({
  type: 'SUBMIT_SUCCESS',
  greeting: greetings[Math.floor(Math.random() * greetings.length)],
  name,
});

export const submitError = (nameError, hobbiesError) => ({
  type: 'SUBMIT_ERROR',
  nameError,
  hobbiesError,
});

export const submitReset = () => ({
  type: 'SUBMIT_RESET',
});
