const initialState = {
  autoCompleteValues: [],
};

const autoCompleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "autoComplete/saveOption":
      return { autoCompleteValues: action.payload };

    default:
      return state;
  }
};

export { autoCompleteReducer };
