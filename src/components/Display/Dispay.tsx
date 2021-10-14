import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { selectNumber, selectOperator } from '../../redux/selectors';

export function Display(): JSX.Element {
  const number = useSelector(selectNumber);
  const operator = useSelector(selectOperator);
    
  return (
    <div className="display"> 
    {`${number}${operator}`}
    </div>
  );
}
