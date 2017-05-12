const hobby = (state, action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
};

export const hobbies = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        hobby(undefined, action),
      ];
    case 'ROMOVE_HOBBY':
      return state.filter(h => {
        return h.id !== action.id
      });
    default:
      return state;
  }
};
