const initialState = {
  gameSession: "",
  guesses: [],
  attempt: 0,
};

const guessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "guess/newGameSession":
      return {
        ...state,
        gameSession: action.payload,
      };

    case "guess/addNewGuess":
      return {
        ...state,
        guesses: state.guesses.concat({ guess: action.payload }),
      };

    case "guess/clearGuesses":
      return {
        ...state,
        guesses: [],
      };

    default:
      return state;
  }
};

export { guessReducer };
