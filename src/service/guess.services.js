import axios from "axios";
const startNewGameSession = async () => {
  const request = axios.get("/game/player");

  return request;
};

const checkGuess = async (guessId, playerId) => {
  const request = axios.patch(`/game/check/${guessId}`, { playerId: playerId });

  return request;
};

export { startNewGameSession, checkGuess };
