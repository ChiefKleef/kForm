import * as actions from './index.jsx';
import * as verifiers from '../components/formUtils.jsx';
import expect from 'expect';

describe('action addHobby', () => {
  it('Should create an action to add a hobby with the specified text', () => {
    const text = 'Fishing';
    const expectedAction = {
      type: 'ADD_HOBBY',
      text
    };
    expect(actions.addHobby(text)).toInclude(expectedAction)
  });
});

const namePasses = ['l', 'Chief Kleef', '             e', 'The Mister Moess'];
const nameFails = ['', ' ', '         '];
const hobbyPasses = [['fishing', 'golfing'], ['fishing']];
const hobbyFails = [[]];
// desribe('action submitError', () => {
//   failFails = [
//     {}
//   ]
// })