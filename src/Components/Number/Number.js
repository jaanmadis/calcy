import React from 'react';
import { combineStyles } from '../../Utils/Utils';
import { colorPositive, colorNegative } from '../../Styles/Colors';

const style = {
    color: 'black',
    fontSize: '4em',
};

export const positiveStyle = {
    color: colorPositive,
};

export const negativeStyle = {
    color: colorNegative,
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