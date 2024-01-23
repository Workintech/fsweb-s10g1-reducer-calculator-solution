import {
  ADD_ONE,
  CE,
  APPLY_NUMBER,
  MEMORY_CLEAR,
  MEMORY_RECORD,
  MEMORY_PLUS,
  MEMORY_RECALL,
  CHANGE_OPERATION,
  CHANGE_OPERATION_V2,
  TYPE_ON_SCREEN,
  EQUALS,
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  temporary: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE_ON_SCREEN:
      const newState = {
        ...state,
        total:
          state.total === 0
            ? action.payload
            : state.total.toString() + action.payload.toString(),
      };
      console.log(newState, 'newState', action.payload, 'action.payload');
      return newState;

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

    case CHANGE_OPERATION_V2:
      return {
        ...state,
        operation: action.payload,
        total: 0,
        temporary:
          state.temporary === 0
            ? state.total
            : calculateResult(
              Number(state.temporary),
              Number(state.total),
              state.operation
            ),
      };

    case EQUALS:
      return {
        ...state,
        total: calculateResult(
          Number(state.temporary),
          Number(state.total),
          state.operation
        ),
        temporary: 0,
      };

    case CE:
      return {
        ...state,
        total: initialState.total,
        temporary: initialState.temporary,
      };

    case MEMORY_PLUS:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_RECORD:
      return {
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
      };
    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory,
      };
    case MEMORY_CLEAR:
      return {
        ...state,
        memory: initialState.memory,
      };

    default:
      return state;
  }
};

export default reducer;
