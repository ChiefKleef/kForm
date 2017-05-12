const defaultState = {
  hobbiesError: false,
  nameError: false,
  resolveSubmission: false
}
export const errors = (state = defaultState, action) => {
  switch (action.type) {
    case 'SUBMIT_ERROR':
      return {
        hobbiesError: action.hobbiesError,
        nameError: action.hobbiesError,
        resolveSubmission: true
      };
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        resolveSubmission: false
      };
    case 'UPDATE_NAME':
      if (state.resolveSubmission) {
        if (action.text.replace(' ', '').length > 0) {
          return {
            ...state,
            nameError: false
          };
        } else {
          return {
            ...state,
            nameError: true
          };
        }
      } else {
        return state;
      }
    case 'ADD_HOBBY':
      if (state.resolveSubmission) {
        return {
          ...state,
          hobbiesError: false
        };
      } else {
        return state;
      }
    case 'REMOVE_HOBBY':
      if (state.resolveSubmission) {
        // if the hobbies are now empty, cause error
        if (action.hobbies.length - 1 === 0) {
          return {
            ...state,
            hobbiesError: true
          };
        } else {
          return {
            ...state,
            hobbiesError: false
          };
        }
        
      }
    default:
      return state;
  }
};