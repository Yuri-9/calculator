import { Operator } from "../shared/enums";

export type IState = {
  number: number;  
  operator: Operator | ''; 
  result: number; 
  memory: number;
}

const store: IState = {
  number: 0,
  operator: '',
  result: 0,
  memory: 0,
}

export default store;