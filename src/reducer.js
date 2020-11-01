export const initialState = {
  user: null,
  entry: {
    oysterName: 'kunamoto',
    restaurant: 'upstate',
    beverage: 'blue moon',
    size: 'medium',
    comments: 'sao good',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return {
        ...state,
        entry: action.entry,
      };
    default:
      return state;
  }
};

export default reducer;
