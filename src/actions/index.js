export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR = "CLEAR";

export const MEMORY_PLUS = "MEMORY_PLUS Şu anki Total => Memory";
export const MEMORY_RECALL =
  "MEMORY_RECALL Şu anki Memory & Total APPLY_NUMBER";
export const MEMORY_CLEAR = "MEMORY_CLEAR Memory = 0";

export const DIGIT = "DIGIT type on screen";
export const CALCULATE = "CALCULATE like apply number";

// action creators
// stajyer - paketleyici
export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const screenType = (number) => {
  console.log("screenType", number);
  return { type: DIGIT, payload: number };
};
