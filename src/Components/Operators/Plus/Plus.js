import React from 'react';
import { combineStyles } from '../../../Utils/Utils';

const style = {
    color: 'black',
    fontSize: '4em',
}

const plus = (props) => {
    const styles = [
        'Plus', 
    ];
        
    return(
        <div 
            onClick={ props.onClick ? () => props.onClick(props.id) : undefined }
            style={ combineStyles([style, props.style]) }
        >
            { '+' }
        </div>
    );
}

export default plus;
