export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const MEMORY_ADD = "MEMORY_ADD total=>memory'e kaydetmek";
export const MEMORY_CLEAR = "MEMORY_CLEAR memory sıfırlamak";
export const MEMORY_RECALL = "MEMORY_RECALL Apply number gibi işleme sokmak";

export const GOKHAN = "GÖKHAN ÖZDEMİR";

// ENUM nedir?
// https://www.tutorialspoint.com/what-is-enum-in-javascript
export const L = "Omuz genişliği 80cm, bel 70cm olan kalıp";
export const M = "Omuz genişliği 70cm, bel 58cm olan kalıp";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const clearDisplay = () => {
  console.log("clearDisplay");
  return { type: CLEAR_DISPLAY };
};

export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};

export const memoryAdd = () => {
  return { type: MEMORY_ADD };
};

export const memoryRecall = () => {
  return { type: MEMORY_RECALL };
};
