import defaultState from './defaultState';
import Type from './types';
import { Memory, Operator } from '../shared/enums'

const { SET_NUMBER, SET_OPERATOR, CLEAR_DISPLAY, SET_MEMORY } = Type;
 
export default (state = defaultState, { type, value }: { type: string; value: any }): any => {
  switch (type) {
    case SET_NUMBER:
      let newNumber;
      if (!state.operator) {
        if(state.result) {
          return { ...state, number: value, result: 0};
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
      return { ...state, number: 0, operator: '', result: 0};
    case SET_MEMORY:
      let newMemory = value === Memory.PLUS ? state.memory + state.number : state.memory - state.number;      
      return { ...state, memory: newMemory, result: newMemory, number: newMemory};
    default:
      return state;
  }
};
