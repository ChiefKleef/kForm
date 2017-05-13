import {addHobby} from './index.jsx';

describe('actions', () => {
  it('should create an action to add a hobby', () => {
    const text = 'Fishing';
    const expectedAction = {
      type: 'ADD_HOBBY',
      text
    };
    expect(actions.addHobby(text)).toEqual(expectedAction)
  });
});