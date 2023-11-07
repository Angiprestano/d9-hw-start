const newState = {
  list: {
    content: [],
  },
};

const mainReducer = (state = newState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        list: {
          ...state.list,
          content: [...state.list.content, action.payload],
        },
      };

    case "REMOVE_FROM_LIST":
      return {
        ...state,
        list: {
          ...state.list,
          content: state.list.content.filter((el, i) => i !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
