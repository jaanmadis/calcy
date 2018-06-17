import React from 'react';
import { combineStyles } from '../../../Utils/Utils';

const style = {
    color: '#5E8014',
    fontSize: '4em',
}

const plus = (props) => {
    return(
        <span 
            onClick={ props.onClick ? () => props.onClick(props.id) : undefined }
            style={ combineStyles([style, props.style]) }
        >
            { '+' }
        </span>
    );
}

export default plus;
