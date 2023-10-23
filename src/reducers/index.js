import { useState } from "react";
import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR } from "./../actions";

export const initialState = {
  total: 100,
  operation: "-",
  memory: 100,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return Number(num1) + Number(num2);
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

// const [value, setValue] = useState()
// const reducer = (state = initialState, action) => {
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    case CLEAR:
      return {
        ...state,
        total: 0,
      };

    default:
      return state;
  }
};

export default reducer;
