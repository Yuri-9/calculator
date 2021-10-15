import { Memory, Operator } from '../shared/enums';
import Type from './types';

const { SET_NUMBER, SET_OPERATOR, CLEAR_DISPLAY, SET_MEMORY } = Type;

export function setNumber(value: number): {
  type: string;
  value: number;
} {
  return { type: SET_NUMBER, value };
}

export function setOperator(value: Operator): {
  type: string;
  value: Operator;
} {
  return { type: SET_OPERATOR, value };
}

export function clearDisplay(): {
  type: string;
} {
  return { type: CLEAR_DISPLAY};
}

export function setMemory(value: Memory): {
  type: string;
  value: Memory;
} {
  return { type: SET_MEMORY, value};
}