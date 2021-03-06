import { IState } from './defaultState';

export const selectNumber = ({ number }: IState): IState['number'] => number;
export const selectOperator = ({ operator }: IState): IState['operator'] => operator;
export const selectResult = ({ result }: IState): IState['result'] => result;


