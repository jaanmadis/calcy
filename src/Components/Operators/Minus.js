import React from 'react';
import { combineStyles } from '../../Utils/Utils';
import { colorMinus } from '../../Styles/Colors';

const style = {
    color: colorMinus,
    fontSize: '4em',
    cursor: 'pointer',
}

const minus = (props) => {
    return(
        <span 
            onClick={ props.onClick ? () => props.onClick(props.index) : undefined }
            style={ combineStyles([style, props.style]) }
        >
            { '-' }
        </span>
    );
}

export default minus;
