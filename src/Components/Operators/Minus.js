import React from 'react';
import { combineStyles } from '../../Utils/Utils';

const style = {
    color: '#5B7B73',
    fontSize: '4em',
}

const minus = (props) => {
    return(
        <span 
            onClick={ props.onClick ? () => props.onClick(props.id) : undefined }
            style={ combineStyles([style, props.style]) }
        >
            { '-' }
        </span>
    );
}

export default minus;
