const defaultState = {
  submitMessage: 'submit',
  submitting: false,
};
export const submit = (state = defaultState, action) => {
  switch (action.type) {
    case 'SUBMIT_LOADING':
      return {
        submitMessage: 'loading',
        submitting: true,
      };
    case 'SUBMIT_SUCCESS':
      return {
        submitMessage: 'success',
        submitting: true,
      };
    case 'SUBMIT_ERROR':
      return {
        submitMessage: 'error',
        submitting: true,
      };
    case 'SUBMIT_RESET':
      return defaultState;
    default:
      return state;
  }
};
