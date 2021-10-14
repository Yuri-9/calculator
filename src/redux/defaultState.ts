export type IState = {
  number: number;  
  operator: string; 
}

const store: IState = {
  number: 0,
  operator: '',
}

export default store;