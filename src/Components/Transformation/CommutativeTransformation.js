import React from 'react';

import Number from '../Number/Number';
import Plus from '../Operators/Plus/Plus';
import { combineStyles } from '../../Utils/Utils';
import { animationInlineFlexStyle, animationInnerSpinStyle, animationOuterSpinStyle } from '../../Styles/Styles';

const commutativeTransformation = (props) => {
    return (
        <span 
            style={ combineStyles([animationInlineFlexStyle, animationOuterSpinStyle]) }
        >
            <Number
                style={ animationInnerSpinStyle }
                value={ props.numbers[0] }
            />
            <Plus
                style={ animationInnerSpinStyle }
            />
            <Number
                style={ animationInnerSpinStyle }
                value={ props.numbers[1] }
            />
        </span>
    );
}

export default commutativeTransformation;