import React from 'react';
import { combineStyles } from '../../Utils/Utils';
import { colorPlus } from '../../Styles/Colors';

const style = {
    color: colorPlus,
    fontSize: '4em',
    cursor: 'pointer',
}

const plus = (props) => {
    return(
        <span 
            onClick={ props.onClick ? () => props.onClick(props.index) : undefined }
            style={ combineStyles([style, props.style]) }
        >
            { '+' }
        </span>
    );
}

export default plus;
