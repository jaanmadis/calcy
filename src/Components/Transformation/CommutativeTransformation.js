import React from 'react';

import Plus from '../Operators/Plus/Plus';
import Sequence from '../Sequence/Sequence';
import { combineStyles } from '../../Utils/Utils';
import { animationInlineFlexStyle, animationInnerSpinStyle, animationOuterSpinStyle } from '../../Styles/Styles';

const plusStyle = {
    color: 'teal',
    fontWeight: 'bold',
}

const commutativeTransformation = (props) => {
    if (props.transformationIndex <= 0 || props.sequence.length <= props.transformationIndex) {
        return null;
    }
    return (
        <span>
            <Sequence
                numberEnd={ props.transformationIndex - 1 }
                operatorBegin={ 1 }
                operatorEnd={ props.transformationIndex }
                value={ props.sequence }
            />            
            <span 
                style={ combineStyles([animationInlineFlexStyle, animationOuterSpinStyle]) }
            >
                <Sequence
                    numberBegin={ props.transformationIndex - 1 }
                    numberEnd={ props.transformationIndex }
                    operatorHide
                    style={ animationInnerSpinStyle }
                    value={ props.sequence }
                /> 
                <Plus
                    style={ combineStyles([animationInnerSpinStyle, plusStyle]) }
                />
                <Sequence
                    numberBegin={ props.transformationIndex }
                    numberEnd={ props.transformationIndex + 1 }
                    operatorHide
                    style={ animationInnerSpinStyle }
                    value={ props.sequence }
                /> 
            </span>
            <Sequence
                numberBegin={ props.transformationIndex + 1 }
                operatorBegin={ props.transformationIndex + 1 }
                value={ props.sequence }
            />            
        </span>
    );
}

export default commutativeTransformation;