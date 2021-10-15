import { Operator } from "../shared/enums";

export type IState = {
  number: number;  
  operator: Operator | ''; 
  result: number | null; 
}

const store: IState = {
  number: 0,
  operator: '',
  result: null,
}

export default store;