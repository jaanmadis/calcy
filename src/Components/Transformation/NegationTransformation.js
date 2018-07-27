import React from 'react'

import Minus from '../Operators/Minus';
import Number from '../Number/Number';
import Plus from '../Operators/Plus';
import { combineStyles } from '../../Utils/Utils';
import { inlineFlexStyle, animationSlideLeft } from '../../Styles/Styles';

const negation = () => {
    return (
        <span>
            <Minus />
            <Plus />
            <Number
                value={ -3 }
            />
            <Number
                value={ 3 }
            />


            <span 
                style={ combineStyles([inlineFlexStyle, animationSlideLeft]) }
            >
                <Minus />
            </span>
        </span>
    );
}

export default negation;

/**
 * 
 *         const zStyle = {
            position: 'absolute',
            zIndex: '1',
        }
            <span
                style={ zStyle }
            >
                ZZZZZZZZ
            </span>
            <span>
                AAAAAAAAAAAAA
            </span>
            <br/>
                <Negation />

 * 
 */