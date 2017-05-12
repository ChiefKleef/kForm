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
const defaultLns = {
  name: '',
  greeting: ''
}
export const lns = (state = defaultLns, action) => {
  switch(action.type) {
    case 'SUBMIT_SUCCESS':
      return {
        name: action.name,
        greeting: action.greeting
      }
    default:
      return state;
  }
}