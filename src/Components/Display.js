import React from 'react';
import { InputMain } from './InputMain';
import { InputAlt } from './InputAlt';

export const Display = (props) => {
  
    return (<div>
      <div id='display'>
        <InputAlt altInput={props.altInput} />
        <InputMain mainInput={props.mainInput} />
      </div>
    </div>);
  
}
