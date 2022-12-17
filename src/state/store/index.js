import { createStore } from "redux";
import combineReducers from "./../../../node_modules/redux/src/combineReducers";

import { autoCompleteReducer } from "../reducers/autoComplete.reducer";
import { guessReducer } from "../reducers/guess.reducer";

const reducers = combineReducers({
  autoComplete: autoCompleteReducer,
  guess: guessReducer,
});

const guessingGameStore = createStore(reducers);

export { guessingGameStore };
