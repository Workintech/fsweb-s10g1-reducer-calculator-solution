export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const GOKHAN = "GÖKHAN ÖZDEMİR";

// ENUM nedir?
// https://www.tutorialspoint.com/what-is-enum-in-javascript
export const L = "Omuz genişliği 80cm, bel 70cm olan kalıp";
export const M = "Omuz genişliği 70cm, bel 58cm olan kalıp";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};
