import React from 'react';
import './style.scss';
import { Display } from '../Display/Dispay';
import { ButtonNumber } from '../ButtonNumber/ButtonNumber';
import { ButtonOperator } from '../ButtonOperator/ButtonOperator';
import { ButtonFunction } from '../ButtonFunction/ButtonFunction';
import { Memory, Operator } from '../../shared/enums';
import { useDispatch } from 'react-redux';
import { clearDisplay, setMemory } from '../../redux/actions';

export function Calculator(): JSX.Element {
  const dispatch = useDispatch(); 

  const handleClear = () => {   
     dispatch(clearDisplay());
  }    
  
  const handleMemoryPlus = () => {  
     dispatch(setMemory(Memory.PLUS));
  }
  
  const handleMemoryMinus = () => {  
    dispatch(setMemory(Memory.MINUS));
     
  }
  
  return (
    <div className="calculator"> 
    <Display />
      <div className="calculator__row">
        <ButtonFunction value={'AC'} onClick={handleClear}/>
        <ButtonFunction value={'MEM+'} onClick={handleMemoryPlus}/>
        <ButtonFunction value={'MEM-'} onClick={handleMemoryMinus}/>       
        <ButtonOperator value={Operator.DIVIDE}/>
       </div>
      <div className="calculator__row">
        <ButtonNumber value={1}/>
        <ButtonNumber value={2}/>
        <ButtonNumber value={3}/>
        <ButtonOperator value={Operator.MULTIPLY}/>
       </div>
      <div className="calculator__row">
        <ButtonNumber value={4}/>
        <ButtonNumber value={5}/>
        <ButtonNumber value={6}/>
        <ButtonOperator value={Operator.MINUS}/>
       </div>
      <div className="calculator__row">
        <ButtonNumber value={7}/>
        <ButtonNumber value={8}/>
        <ButtonNumber value={9}/>
        <ButtonOperator value={Operator.PLUS}/>
       </div>
      <div className="calculator__row">      
        <ButtonNumber value={0}/>
        <ButtonOperator value={Operator.EQUAL}/>
       </div>
    </div>
  );
}
