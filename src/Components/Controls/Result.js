import React from 'react'
import { combineStyles } from '../../Utils/Utils';
import { positiveStyle, negativeStyle } from '../Number/Number';

const style = {
    border: '4px solid #AA6817',
    fontSize: '4em',
    textAlign: 'center',
    width: '300px',
}

const result = (props) => (
    <input
        onChange={ props.onChange }
        onKeyDown={ props.onKeyDown }
        style={ combineStyles([style, props.value > 0 ? positiveStyle : props.value < 0 ? negativeStyle : undefined, props.style]) }
        value={ props.value }
    />
);

export default result;

