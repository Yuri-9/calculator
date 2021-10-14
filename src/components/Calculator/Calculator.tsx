import React from 'react';
import './style.scss';
import { Display } from '../Display/Dispay';
import { ButtonNumber } from '../ButtonNumber/ButtonNumber';

export function Calculator(): JSX.Element {
  
  return (
    <div className="calculator"> 
    <Display />
      <div className="calculator__row">
        <ButtonNumber value={1}/>
        <ButtonNumber value={2}/>
        <ButtonNumber value={3}/>
       </div>
      <div className="calculator__row">
        <ButtonNumber value={4}/>
        <ButtonNumber value={5}/>
        <ButtonNumber value={6}/>
       </div>
      <div className="calculator__row">
        <ButtonNumber value={7}/>
        <ButtonNumber value={8}/>
        <ButtonNumber value={9}/>
       </div>
    </div>
  );
}
