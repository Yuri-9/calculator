import './app.scss';
import React from 'react';
import { Calculator } from './components/Calculator/Calculator';


export const App = (): JSX.Element => {
  return ( 
    <main>
    Hello!
    <Calculator />
    </main>    
  );
};
