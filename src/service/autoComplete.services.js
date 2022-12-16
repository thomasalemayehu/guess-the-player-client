import axios from "axios";

const getAutoCompleteOptions = async (queryString) => {
  const request = axios.get(`/player/autocomplete?query=${queryString}`);

  return request;
};

export { getAutoCompleteOptions };
