import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { selectNumber, selectOperator, selectResult } from '../../redux/selectors';

export function Display(): JSX.Element {
  const number = useSelector(selectNumber);
  const operator = useSelector(selectOperator);
  const result = useSelector(selectResult);
    
  return (
    <div className="display"> 
    {`${result ? result : number}${operator}`}
    </div>
  );
}
