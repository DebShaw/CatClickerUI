const catsReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "ADD_CAT":
      return { ...state };
    case "CLICK_CAT":
      return { ...state };
    case "ACTIVATE_CAT":
      return { ...state };
    case "UPDATE_CAT":
      return { ...state };
    case "FETCH_ALL_CATS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default catsReducer;
