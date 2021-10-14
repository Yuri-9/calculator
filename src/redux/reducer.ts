import defaultState from './defaultState';
import Type from './types';

const { SET_NUMBER } = Type;

export default (state = defaultState, { type, value }: { type: string; value: any }): any => {
  switch (type) {
    case SET_NUMBER:
      return { ...state, number: value };
    default:
      return state;
  }
};
