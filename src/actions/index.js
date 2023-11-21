// action
export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "Ekranı Temizle";

export const MEMORY_PLUS = "MEMORY değerine total'i yazar";
export const MEMORY_APPLY = "MEMORY değerini total ile işleme sokar";
export const MEMORY_CLEAR = "MEMORY değerini sıfırlar";

export const TYPE_NUMBER = "TYPE_NUMBER";

// action creators
export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const typeNumber = (number) => {
  return { type: TYPE_NUMBER, payload: number };
};
