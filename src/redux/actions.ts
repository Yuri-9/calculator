import Type from './types';

const { SET_NUMBER } = Type;

export function setCardType(value: number): {
  type: string;
  value: number;
} {
  return { type: SET_NUMBER, value };
}