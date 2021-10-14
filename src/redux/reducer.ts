import defaultState from './defaultState';
import Type from './types';
import { Operator } from '../shared/enums'

const { SET_NUMBER, SET_OPERATOR, CLEAR_DISPLAY } = Type;
 
export default (state = defaultState, { type, value }: { type: string; value: any }): any => {
  switch (type) {
    case SET_NUMBER:
     let newNumber      
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
            newNumber = state.number * 10 + value;
            break;
        }
        if (state.operator) {
          return { ...state, number: newNumber, operator: ''};
        } else {
          return { ...state, number: newNumber};
        }    
    case SET_OPERATOR:
      return { ...state, operator: value };
    case CLEAR_DISPLAY:
      return { ...state, number: 0, operator: ''};
    default:
      return state;
  }
};
