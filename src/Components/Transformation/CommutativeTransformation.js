import React, { Component } from 'react';

import Sequence from '../Sequence/Sequence';
import { combineStyles } from '../../Utils/Utils';
import { inlineFlexStyle, animationInnerSpinStyle, animationOuterSpinStyle } from '../../Styles/Styles';

const DURATION = 1000;

class CommutativeTransformation extends Component {
    componentDidMount() {
        setTimeout(this.onDone, DURATION);
    }

    render() {
        if (
            this.props.transformationBegin === undefined 
            || this.props.transformationCenter === undefined 
            || this.props.transformationEnd === undefined 
            || this.props.transformationBegin >= this.props.transformationCenter
            || this.props.transformationCenter >= this.props.transformationEnd
            || this.props.transformationBegin < 0
            || this.props.transformationCenter <= 0 
            || this.props.transformationEnd > this.props.sequence.length
        ) {
            return undefined;
        }
        return (
            <span>
                <Sequence
                    numberEnd={ this.props.transformationBegin - 1 }
                    operatorBegin={ 1 }
                    operatorEnd={ this.props.transformationBegin }
                    value={ this.props.sequence }
                />            
                <span 
                    style={ combineStyles([inlineFlexStyle, animationOuterSpinStyle(DURATION)]) }
                >
                    <Sequence
                        numberBegin={ this.props.transformationBegin }
                        numberEnd={ this.props.transformationCenter - 1 }
                        operatorBegin={ this.props.transformationBegin + 1 }
                        operatorEnd={ this.props.transformationCenter - 1 }
                        style={ animationInnerSpinStyle(DURATION) }
                        value={ this.props.sequence }
                    /> 
                    <Sequence
                        numberHide
                        operatorBegin={ this.props.transformationCenter }
                        operatorEnd={ this.props.transformationCenter }
                        style={ animationInnerSpinStyle(DURATION) }
                        value={ this.props.sequence }
                    /> 
                    <Sequence
                        numberBegin={ this.props.transformationCenter }
                        numberEnd={ this.props.transformationEnd - 1 }
                        operatorBegin={ this.props.transformationCenter + 1 }
                        operatorEnd={ this.props.transformationEnd - 1 }
                        style={ animationInnerSpinStyle(DURATION) }
                        value={ this.props.sequence }
                    /> 
                </span>
                <Sequence
                    numberBegin={ this.props.transformationEnd }
                    operatorBegin={ this.props.transformationEnd }
                    value={ this.props.sequence }
                /> 
            </span>
        );
    }

    onDone = () => {
        if (this.props.onDone) {
            this.props.onDone();
        }
    }
}

export default CommutativeTransformation;