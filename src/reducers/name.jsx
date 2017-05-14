const defaultName = {
  first: '',
  last: '',
};
export const name = (state = defaultName, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        [action.side]: action.text,
      };
    case 'SUBMIT_SUCCESS':
      return defaultName;
    default:
      return state;
  }
};

// last name submitted
const defaultLns = {
  name: '',
  greeting: '',
  count: 0,
};
export const lns = (state = defaultLns, action) => {
  switch (action.type) {
    case 'SUBMIT_SUCCESS':
      const count = state.count + 1;
      return {
        name: action.name,
        greeting: action.greeting,
        count: count,
      };
    default:
      return state;
  }
};
