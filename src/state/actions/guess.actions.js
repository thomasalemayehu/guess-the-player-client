const addNewGuessAction = (guess) => {
  return {
    type: "guess/addNewGuess",
    payload: guess,
  };
};

export { addNewGuessAction };
