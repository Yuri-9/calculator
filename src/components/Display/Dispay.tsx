import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { selectNumber } from '../../redux/selectors';

export function Display(): JSX.Element {
  const number = useSelector(selectNumber);
  
  return (
    <div className="display"> 
    {number}
    </div>
  );
}
