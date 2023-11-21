import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_APPLY,
  MEMORY_PLUS,
  MEMORY_CLEAR,
  TYPE_NUMBER,
} from "./../actions";

export const initialState = {
  total: 101,
  operation: "*",
  memory: 100,
  temp_memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  console.log("calculateResult", num1, num2, operation);
  switch (operation) {
    case "+":
      return Number(num1) + Number(num2);
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    default:
      return;
  }
};

const typeOnScreen = (screen, number) => {
  if (screen === 0) {
    return number;
  } else {
    return screen.toString() + number.toString();
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_DISPLAY:
      const newState = {
        ...state,
        total: 0,
      };
      return newState;

    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case MEMORY_PLUS:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_APPLY:
      return {
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        // total: calculateResult(state.total, action.payload, state.operation),
        total: calculateResult(state.temp_memory, state.total, state.operation),
      };

    case TYPE_NUMBER:
      return {
        ...state,
        total: typeOnScreen(state.total, action.payload),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        temp_memory: state.total,
        total: 0,
      };

    default:
      return state;
  }
};

export default reducer;
