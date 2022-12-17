const newGameSessionAction = (sessionId) => {
  return {
    type: "guess/newGameSession",
    payload: sessionId,
  };
};

const addNewGuessAction = (guess) => {
  return {
    type: "guess/addNewGuess",
    payload: guess,
  };
};

const clearGuessAction = () => {
  return {
    type: "guess/clearGuesses",
    payload: [],
  };
};

export { addNewGuessAction, newGameSessionAction, clearGuessAction };
