import * as verifiers from '../components/formUtils.jsx';
const defaultState = {
  hobbiesError: false,
  nameError: false,
  resolveSubmission: false,
};
export const errors = (state = defaultState, action) => {
  switch (action.type) {
    case 'SUBMIT_ERROR':
      return {
        hobbiesError: action.hobbiesError,
        nameError: action.nameError,
        resolveSubmission: true,
      };
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        resolveSubmission: false,
      };
    case 'UPDATE_NAME':
      if (state.resolveSubmission) {
        if (verifiers.verifyName(action.text)) {
          return {
            ...state,
            nameError: false,
          };
        }
        return {
          ...state,
          nameError: true,
        };
      }
      return state;

    case 'ADD_HOBBY':
      if (state.resolveSubmission) {
        return {
          ...state,
          hobbiesError: false,
        };
      }
      return state;

    case 'REMOVE_HOBBY':
      if (state.resolveSubmission) {
        // if the hobbies are now empty, cause error
        // this cannot use the hobbies util bc it is predicting the next state
        if (action.hobbies.length === 1) {
          return {
            ...state,
            hobbiesError: true,
          };
        }
        return {
          ...state,
          hobbiesError: false,
        };
      }
    default:
      return state;
  }
};
