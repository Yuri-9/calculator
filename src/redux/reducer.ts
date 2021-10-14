import defaultState from './defaultState';
import Type from './types';

const { SET_NUMBER, SET_OPERATOR } = Type;

export default (state = defaultState, { type, value }: { type: string; value: any }): any => {
  switch (type) {
    case SET_NUMBER:
      return { ...state, number: value };
    case SET_OPERATOR:
      return { ...state, operator: value };
    default:
      return state;
  }
};
