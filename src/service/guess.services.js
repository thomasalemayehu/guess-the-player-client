import axios from "axios";
import {API_BASE_URL} from "../CONSTANTS"
const startNewGameSession = async () => {
  const request = axios.get(`${API_BASE_URL}/game/player`);

  return request;
};

const checkGuess = async (guessId, playerId) => {
  const request = axios.patch(`${API_BASE_URL}/game/check/${guessId}`, {
    playerId: playerId,
  });

  return request;
};

export { startNewGameSession, checkGuess };
