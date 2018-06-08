import React from 'react';
import './Number.css';

const number = (props) => {
    return (
        <span className={ 
            props.value > 0 
                ? 'NumberPositive' 
                : props.value < 0 
                    ? 'NumberNegative' 
                    : 'NumberZero' 
        }>
            { props.value }
        </span>
    );
};

export default number;