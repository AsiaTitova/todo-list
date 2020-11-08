const initialState = {
  items: [],
  isLoaded: false,
}

const lists = (state = initialState, action) => {
  if (action.type === 'ADD_TASK') {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
}

export default lists;
