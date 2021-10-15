import defaultState from './defaultState';
import Type from './types';
import { Operator } from '../shared/enums'

const { SET_NUMBER, SET_OPERATOR, CLEAR_DISPLAY } = Type;
 
export default (state = defaultState, { type, value }: { type: string; value: any }): any => {
  switch (type) {
    case SET_NUMBER:
      let newNumber;
      if (!state.operator) {
        if(state.result) {
          return { ...state, number: value, result: null};
        }
        return { ...state, number: state.number * 10 + value};
     }
      if (state.operator) {
        switch (state.operator) {
          case Operator.PLUS:
            newNumber = state.number + value;            
            break;
          case Operator.MINUS:
            newNumber = state.number - value;  
            break;
          case Operator.MULTIPLY:
            newNumber = state.number * value;  
            break;
          case Operator.DIVIDE:
            newNumber = state.number / value; 
            break;
          default:           
            break;
        }        
         return { ...state, number: newNumber, operator: '', result: newNumber};        
      }
    case SET_OPERATOR:
      if (value === Operator.EQUAL) return;
      return { ...state, operator: value };
    case CLEAR_DISPLAY:
      return { ...state, number: 0, operator: '', result: null};
    default:
      return state;
  }
};
