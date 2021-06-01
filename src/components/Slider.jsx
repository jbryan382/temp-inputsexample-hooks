// @ts-nocheck
import React from 'react';

export default function Slider(props) {

  return (
    <div>
      <input
        type="range" min="0" max={props.mTemp} onInput={props.handleInput} value={props.tempValue} />
    </div>
  );
}
