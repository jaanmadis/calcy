import React from 'react'

import Minus from '../Operators/Minus';
import { combineStyles } from '../../Utils/Utils';
import { animationInlineFlexStyle, animationSlideLeft } from '../../Styles/Styles';

const negation = () => {
    return (
        <span 
            style={ combineStyles([animationInlineFlexStyle, animationSlideLeft]) }
         >
            <Minus />
        </span>
    );
}

export default negation;