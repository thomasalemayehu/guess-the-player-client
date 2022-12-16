const initialState = {
  guesses: [],
  attempt: 0,
};

const guessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "guess/addNewGuess":
      return {
        guesses: state.guesses.concat({ guess: action.payload }),
      };

    default:
      return state;
  }
};

export { guessReducer };
