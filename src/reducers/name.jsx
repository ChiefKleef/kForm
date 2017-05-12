export const name = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        [action.side]: action.text
      }
    default:
      return state;
  }
};
