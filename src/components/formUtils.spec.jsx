import * as verifiers from './formUtils.jsx';
import expect from 'expect';

describe('verify name', () => {
  const fails = ['', ' ', '         '];
  fails.forEach((fail) => {
    it(`Should fail on input of ${fail}`, () => {
      const actual = verifiers.verifyName(fail);
      expect(actual).toEqual(false);
    });
  });
  const passes = ['l', 'Chief Kleef', '             e', 'The Mister Moess'];
  passes.forEach((pass) => {
    it(`Should pass on input of ${pass}`, () => {
      const actual = verifiers.verifyName(pass);
      expect(actual).toEqual(true);
    });
  });
});

describe('verify hobbies', () => {
  const fails = [[]];
  fails.forEach((fail) => {
    it(`Should fail on input of ${fail}`, () => {
      const actual = verifiers.verifyHobbies(fail);
      expect(actual).toEqual(false);
    });
  });
  const passes = [['fishing', 'golfing'], ['fishing']];
  passes.forEach((pass) => {
    it(`Should pass on input of ${pass}`, () => {
      const actual = verifiers.verifyHobbies(pass);
      expect(actual).toEqual(true);
    });
  });
});
