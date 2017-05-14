import * as actions from './index.jsx';
import * as verifiers from '../components/formUtils.jsx';
import expect from 'expect';

// http://ricostacruz.com/cheatsheets/expectjs.html

describe('action addHobby', () => {
  it('Should create an action to add a hobby with the specified text', () => {
    const text = 'Fishing';
    const expectedAction = {
      type: 'ADD_HOBBY',
      text,
    };
    expect(actions.addHobby(text)).toInclude(expectedAction);
  });
});

describe('action submitError', () => {
  const namePasses = ['l', 'Chief Kleef', '             e', 'The Mister Moess'];
  const nameFails = ['', ' ', '         '];
  const hobbyPasses = [['fishing', 'golfing'], ['fishing']];
  const hobbyFails = [[]];

  namePasses.forEach((np) => {
    const expectedPass = {
      type: 'SUBMIT_ERROR',
      nameError: false,
      hobbiesError: false,
    };
    const nameError = !verifiers.verifyName(np);
    hobbyPasses.forEach((hp) => {
      const hobbyError = !verifiers.verifyHobbies(hp);
      it(`Should produce ${expectedPass} on input of name "${np}" and hobby ${hp}`, () => {
        const actual = actions.submitError(nameError, hobbyError);
        expect(actual).toEqual(expectedPass);
      });
    });
    const expectedFail = {
      type: 'SUBMIT_ERROR',
      nameError: false,
      hobbiesError: true,
    };
    hobbyFails.forEach((hf) => {
      const hobbyError = !verifiers.verifyHobbies(hf);
      it(`Should produce ${expectedPass} on input of name "${np}" and hobby ${hf}`, () => {
        const actual = actions.submitError(nameError, hobbyError);
        expect(actual).toEqual(expectedFail);
      });
    });
  });

  nameFails.forEach((nf) => {
    const expectedPass = {
      type: 'SUBMIT_ERROR',
      nameError: true,
      hobbiesError: false,
    };
    const nameError = !verifiers.verifyName(nf);
    hobbyPasses.forEach((hp) => {
      const hobbyError = !verifiers.verifyHobbies(hp);
      it(`Should produce ${expectedPass} on input of name "${nf}" and hobby ${hp}`, () => {
        const actual = actions.submitError(nameError, hobbyError);
        expect(actual).toEqual(expectedPass);
      });
    });
    const expectedFail = {
      type: 'SUBMIT_ERROR',
      nameError: true,
      hobbiesError: true,
    };
    hobbyFails.forEach((hf) => {
      const hobbyError = !verifiers.verifyHobbies(hf);
      it(`Should produce ${expectedPass} on input of name "${nf}" and hobby ${hf}`, () => {
        const actual = actions.submitError(nameError, hobbyError);
        expect(actual).toEqual(expectedFail);
      });
    });
  });
});
