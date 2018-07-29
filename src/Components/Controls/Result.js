import React from 'react'

import { combineStyles } from '../../Utils/Utils';
import { colorNeutralGray } from '../../Styles/Colors';
import { positiveStyle, negativeStyle } from '../../Styles/Styles';

const style = {
    border: '4px solid ' + colorNeutralGray,
    borderRadius: '10px',
    fontSize: '4em',
    textAlign: 'center',
    outline: 'none',
    width: '200px',
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


