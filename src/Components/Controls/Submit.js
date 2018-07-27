import React from 'react';
import { colorNeutralGray } from '../../Styles/Colors';

const style = {
    backgroundColor: '#CCCCCC',
    border: '4px solid ' + colorNeutralGray,
    color: colorNeutralGray,
    fontSize: '3em',
    marginLeft: '6px',
    outline: 'none',
    width: '100px',
}

const submit = (props) => (
    <button
        style={ style }
        onClick={ props.onClick }
    >
        { '\u2BC8' }
    </button>
);

export default submit;