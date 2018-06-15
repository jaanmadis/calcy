import React from 'react';
import { combineStyles } from '../../Utils/Utils';

const style = {
    color: 'black',
    fontSize: '4em',
};

const positiveStyle = {
    color: '#8A4300',
};

const negativeStyle = {
    color: '#0056B3',
};

const number = (props) => {
    return (
        <div 
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
        </div>
    );
};

export default number;