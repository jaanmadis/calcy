import React from 'react';
import './Number.css';

const number = (props) => {
    const styles = [
        'Number',
        props.value > 0 
            ? 'NumberPositive' 
            : props.value < 0 
                ? 'NumberNegative' 
                : 'NumberZero',
        props.animated
            ? 'Sequence-Animation-Container Sequence-Animation-Inner'
            : undefined
    ];
    return (
        <div 
            className={ styles.join(' ') }
            onClick={ props.onClick ? () => props.onClick(props.id) : undefined }
        >
            { props.value }
        </div>
    );
};

export default number;