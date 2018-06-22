import React from 'react';

import Number from '../Number/Number';
import Plus from '../Operators/Plus/Plus';

const shouldShow = (begin, end, hide, index) => (
    (hide === undefined) && (begin === undefined || begin <= index) && (end === undefined || index <= end)
);

const sequence = (props) => {
    const values = props.value.map((element, index) => {
        let number = undefined
        if (shouldShow(props.numberBegin, props.numberEnd, props.numberHide, index)) {
            number = 
                <Number 
                    value={ element.number } 
                />;
        }
        let operator = undefined;
        if (shouldShow(props.operatorBegin, props.operatorEnd, props.operatorHide, index)) {
            operator = 
                <Plus />
        }
        if (number || operator) {
            return ( 
                <span
                    key={ element.number.toString() + index }
                >
                    { operator }
                    { number } 
                </span>
            );
        } else {
            return null
        }
    });
    return (
        <span
            style={ props.style }
        >
            { values }
        </span>
    );
}

export default sequence;