import React from 'react';

import Number from '../Number/Number';
import Plus from '../Operators/Plus';
import Minus from '../Operators/Minus';
import { Operator } from '../../Logic/Logic';

const shouldShow = (begin, end, hide, index) => (
    (hide === undefined) && (begin === undefined || begin <= index) && (end === undefined || index <= end)
);

const sequence = (props) => {
    const values = props.value.map((element, index) => {
        let number = undefined
        if (shouldShow(props.numberBegin, props.numberEnd, props.numberHide, index)) {
            number = 
                <Number
                    index={ index }                
                    onClick={ props.onNumberClick }
                    style={ props.numberStyle }
                    value={ element.number }
                />;
        }
        let operator = undefined;
        if (shouldShow(props.operatorBegin, props.operatorEnd, props.operatorHide, index)) {
            switch (element.operator) {
                case Operator.PLUS:
                    operator = 
                        <Plus 
                            index={ index }
                            onClick={ props.onPlusClick }
                            style={ props.operatorStyle }
                        />
                    break;
                case Operator.MINUS:
                    operator = 
                        <Minus 
                            index={ index }
                            onClick={ props.onMinusClick }
                            style={ props.operatorStyle }
                        />
                    break;
                default:
            }
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