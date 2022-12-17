import axios from "axios";
import {API_BASE_URL} from "../CONSTANTS"
const getAutoCompleteOptions = async (queryString) => {
  const request = axios.get(
    `${API_BASE_URL}/player/autocomplete?query=${queryString}`
  );

  return request;
};

export { getAutoCompleteOptions };
