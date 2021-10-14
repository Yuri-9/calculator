import React from 'react';
import './style.scss';
import { Display } from '../Display/Dispay';
import { ButtonNumber } from '../ButtonNumber/ButtonNumber';
import { ButtonOperator } from '../ButtonOperator/ButtonOperator';
import { ButtonFunction } from '../ButtonFunction/ButtonFunction';

export function Calculator(): JSX.Element {

  const handleClear = () => {
    console.log('clear');    
  }

  const handleMemory = () => {
    console.log('clear');    
  }
  
  return (
    <div className="calculator"> 
    <Display />
      <div className="calculator__row">
        <ButtonFunction value={'AC'} onClick={handleClear}/>
        <ButtonFunction value={'MEM+'} onClick={handleMemory}/>
        <ButtonFunction value={'MEM-'} onClick={handleMemory}/>       
        <ButtonOperator value={'/'}/>
       </div>
      <div className="calculator__row">
        <ButtonNumber value={1}/>
        <ButtonNumber value={2}/>
        <ButtonNumber value={3}/>
        <ButtonOperator value={'х'}/>
       </div>
      <div className="calculator__row">
        <ButtonNumber value={4}/>
        <ButtonNumber value={5}/>
        <ButtonNumber value={6}/>
        <ButtonOperator value={'-'}/>
       </div>
      <div className="calculator__row">
        <ButtonNumber value={7}/>
        <ButtonNumber value={8}/>
        <ButtonNumber value={9}/>
        <ButtonOperator value={'+'}/>
       </div>
      <div className="calculator__row">      
        <ButtonNumber value={0}/>
        <ButtonOperator value={'='}/>
       </div>
    </div>
  );
}
