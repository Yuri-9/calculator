
import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { setNumber } from '../../redux/actions';

interface IButtonNumber {
  value: number;
}

export function ButtonNumber({value}: IButtonNumber): JSX.Element {
  const dispatch = useDispatch();  
  const handleClick = () => {
    dispatch(setNumber(value))
  }

  return (
    <button className="button__number" onClick={handleClick}> 
    {value}
    </button>
  )
}