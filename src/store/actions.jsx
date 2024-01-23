export const ADD_ONE = 'Bir Ekle';
export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CHANGE_OPERATION_V2 = 'CHANGE_OPERATION Classical Calculator';
export const CE = 'CE Clear Display';
export const EQUALS = 'EQUALS Eşittir';

export const MEMORY_PLUS = 'MEMORY_PLUS hafızaya at';
export const MEMORY_RECALL = 'MEMORY_RECALL hafızadan totale al';
export const MEMORY_RECORD =
  'MEMORY_RECORD hafızadaki değeri ekrandakiyle toplar';
export const MEMORY_CLEAR = 'MEMORY_CLEAR hafızayı temizle';

export const TYPE_ON_SCREEN = 'TYPE_ON_SCREEN';



export const typeOnScreen = (number) => {
  return { type: TYPE_ON_SCREEN, payload: number.toString() };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};
export const changeOperationV2 = (operation) => {
  return { type: CHANGE_OPERATION_V2, payload: operation };
};
