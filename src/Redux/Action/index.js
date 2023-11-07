// qui scriviamo gli export di add e remove

export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";

export const addToFavoriteList = (data) => {
  return {
    type: ADD_TO_LIST,
    payload: data.company_name,
  };
};

export const removeButtonFromList = (i) => {
  return {
    type: REMOVE_FROM_LIST,
    payload: i,
  };
};
