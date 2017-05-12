import { v4 } from 'node-uuid';


export const updateHobby = (text) => ({
  type: 'UPDATE_HOBBY',
  text
});

export const addHobby = (text) => ({
  type: 'ADD_HOBBY',
  id: v4(),
  text
});

export const removeHobby = (id) => ({
  type: 'REMOVE_HOBBY',
  id
});

export const updateName = (side, text) => ({
  type: 'UPDATE_NAME',
  side,
  text
});

export const submitLoading = () => ({
  type: 'SUBMIT_LOADING',
});

export const submitSuccess = (name) => ({
  type: 'SUBMIT_SUCCESS',
  name
});

export const submitError = () => ({
  type: 'SUBMIT_ERROR',
});

export const submitReset = () => ({
  type: 'SUBMIT_RESET',
});
