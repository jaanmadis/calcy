import React from 'react';
import './Plus.css';

const plus = (props) => {
    const styles = [
        'Plus', 
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

export default plus;
