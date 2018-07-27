import React from 'react';
import { combineStyles } from '../../Utils/Utils';

const style = {
    fontSize: '4em',
}

const equal = (props) => {
    return(
        <span 
            onClick={ props.onClick ? () => props.onClick(props.id) : undefined }
            style={ combineStyles([style, props.style]) }
        >
            { '=' }
        </span>
    );
}

export default equal;