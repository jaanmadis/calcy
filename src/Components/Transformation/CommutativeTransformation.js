import React from 'react';

import Sequence from '../Sequence/Sequence';
import { combineStyles } from '../../Utils/Utils';
import { animationInlineFlexStyle, animationInnerSpinStyle, animationOuterSpinStyle } from '../../Styles/Styles';

const commutativeTransformation = (props) => {
    if (
        props.transformationBegin === undefined 
        || props.transformationCenter === undefined 
        || props.transformationEnd === undefined 
        || props.transformationBegin >= props.transformationCenter
        || props.transformationCenter >= props.transformationEnd
        || props.transformationBegin < 0
        || props.transformationCenter <= 0 
        || props.transformationEnd > props.sequence.length
    ) {
        return null;
    }
    return (
        <span>
            <Sequence
                numberEnd={ props.transformationBegin - 1 }
                operatorBegin={ 1 }
                operatorEnd={ props.transformationBegin }
                value={ props.sequence }
            />            
            <span 
                style={ combineStyles([animationInlineFlexStyle, animationOuterSpinStyle]) }
            >
                <Sequence
                    numberBegin={ props.transformationBegin }
                    numberEnd={ props.transformationCenter - 1 }
                    operatorBegin={ props.transformationBegin + 1 }
                    operatorEnd={ props.transformationCenter - 1 }
                    style={ animationInnerSpinStyle }
                    value={ props.sequence }
                /> 
                <Sequence
                    numberHide
                    operatorBegin={ props.transformationCenter }
                    operatorEnd={ props.transformationCenter }
                    style={ animationInnerSpinStyle }
                    value={ props.sequence }
                /> 
                <Sequence
                    numberBegin={ props.transformationCenter }
                    numberEnd={ props.transformationEnd - 1 }
                    operatorBegin={ props.transformationCenter + 1 }
                    operatorEnd={ props.transformationEnd - 1 }
                    style={ animationInnerSpinStyle }
                    value={ props.sequence }
                /> 
            </span>
            <Sequence
                numberBegin={ props.transformationEnd }
                operatorBegin={ props.transformationEnd }
                value={ props.sequence }
            /> 
        </span>
    );
}

export default commutativeTransformation;