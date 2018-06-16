import React from 'react';

import Number from '../Number/Number';
import Plus from '../Operators/Plus/Plus';

const sequence = (props) => {
    const sequence = props.sequence.map((element, index) => {
        const operator = 
            <Plus
                id={ index }
                onClick={ props.onPlusClick }
            />
        return (
            <span 
                key={ element.number.toString() + index }
            >
                { index > 0 ? operator : null }
                <Number 
                    value={ element.number }
                />
            </span>
        );
    });
    return (
        <span>
            { sequence }
        </span>
    );
}

export default sequence;