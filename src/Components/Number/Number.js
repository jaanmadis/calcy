import React from 'react';

import { combineStyles } from '../../Utils/Utils';
import { positiveStyle, negativeStyle } from '../../Styles/Styles';

const style = {
    color: 'black',
    fontSize: '4em',
    cursor: 'pointer',
};

const number = (props) => {
    return (
        <span 
            onClick={ props.onClick ? () => props.onClick(props.index) : undefined }
            style={ combineStyles([
                style, 
                props.value > 0 
                    ? positiveStyle 
                    : props.value < 0 
                        ? negativeStyle 
                        : undefined,
                props.style
            ]) }
        >
            { props.value }
        </span>
    );
};

export default number;