
import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { setOperator } from '../../redux/actions';

interface IButtonOperator {
  value: string;
}

export function ButtonOperator({value}: IButtonOperator): JSX.Element {
  const dispatch = useDispatch();  
  const handleClick = () => {
    dispatch(setOperator(value))
  }  
  
  return (
    <button className="button__operator" onClick={handleClick}> 
    {value}
    </button>
  )
}