
import React from 'react';
import './style.scss';

interface IButtonFunction {
  value: string;
  onClick: () => void;
}

export function ButtonFunction({value, onClick}: IButtonFunction): JSX.Element {   
  return (
    <button className="button button__function" onClick={onClick}> 
    {value}
    </button>
  )
}