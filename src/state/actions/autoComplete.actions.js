const saveAutoCompleteOptionsAction = (autoCompleteOptions) => {
  return {
    type: "autoComplete/saveOption",
    payload: autoCompleteOptions,
  };
};

export { saveAutoCompleteOptionsAction };
