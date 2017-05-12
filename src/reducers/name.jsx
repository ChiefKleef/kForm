const defaultName = {
  first: '',
  last: ''
}
export const name = (state = defaultName, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        [action.side]: action.text
      }
    case 'SUBMIT_SUCCESS':
      return defaultName;
    default:
      return state;
  }
};

// last name submitted
export const lns = (state='', action) => {
  switch(action.type) {
    case 'SUBMIT_SUCCESS':
      return `${action.greeting}, ${action.name}.`
    default:
      return state;
  }
}