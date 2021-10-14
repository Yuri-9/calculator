import Type from './types';

const { SET_NUMBER, SET_OPERATOR, CLEAR_DISPLAY } = Type;

export function setNumber(value: number): {
  type: string;
  value: number;
} {
  return { type: SET_NUMBER, value };
}

export function setOperator(value: string): {
  type: string;
  value: string;
} {
  return { type: SET_OPERATOR, value };
}

export function clearDisplay(): {
  type: string;
} {
  return { type: CLEAR_DISPLAY};
}