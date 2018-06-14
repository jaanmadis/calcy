import React from 'react';
import './Operator.css';

const operator = (props) => {
    const styles = [
        'Operator', 
        props.animated
            ? 'Sequence-Animation-Container Sequence-Animation-Inner'
            : undefined
    ];
        
    return(
        <div 
            className={ styles.join(' ') }
            onClick={ props.onClick ? () => props.onClick(props.id) : undefined }
        >
            { props.value }
        </div>
    );
}

export default operator;
