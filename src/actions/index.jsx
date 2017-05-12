import { v4 } from 'node-uuid';

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
