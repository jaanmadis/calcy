import React from 'react';
import { combineStyles } from '../../Utils/Utils';

const style = {
    color: 'black',
    fontSize: '4em',
};

export const positiveStyle = {
    color: '#C75300',
};

export const negativeStyle = {
    color: '#0079D1',
};

const number = (props) => {
    return (
        <span 
            onClick={ props.onClick ? () => props.onClick(props.id) : undefined }
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