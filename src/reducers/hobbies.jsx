export const hobbyEntry = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_HOBBY':
      return action.text;
    case 'ADD_HOBBY':
      return '';
    case 'SUBMIT_SUCCESS':
      return '';
    default:
      return state;
  }
};

const hobby = (state, action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return {
        id: action.id,
        text: action.text,
        color: action.color,
      };
    default:
      return state;
  }
};

export const hobbies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        hobby(undefined, action),
      ];
    case 'REMOVE_HOBBY':
      return state.filter(h => h.id !== action.id);
    case 'SUBMIT_SUCCESS':
      return [];
    default:
      return state;
  }
};
