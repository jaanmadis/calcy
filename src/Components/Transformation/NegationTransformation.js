import React, { Component } from 'react'

import Sequence from '../Sequence/Sequence';
import { combineStyles } from '../../Utils/Utils';
import { inlineFlexStyle, animationCollapseRight, animationCollapseLeft } from '../../Styles/Styles';

class NegationTransformation extends Component {
    render() {
        if (
            this.props.transformationBegin === undefined 
            || this.props.transformationCenter === undefined 
            || this.props.transformationEnd === undefined 
            // || this.props.transformationBegin >= this.props.transformationCenter
            // || this.props.transformationCenter >= this.props.transformationEnd
            // || this.props.transformationBegin < 0
            // || this.props.transformationCenter <= 0 
            // || this.props.transformationEnd > this.props.sequence.length
        ) {
            return undefined;
        }
        return (
            <span>
                <Sequence
                    style={ combineStyles([inlineFlexStyle, animationCollapseRight()]) }
                    operatorBegin={ 1 }
                    operatorEnd={ this.props.transformationCenter }
                    numberEnd={ this.props.transformationCenter - 1 }
                    value={ this.props.sequence }
                />            
                <Sequence
                    style={ combineStyles([inlineFlexStyle, animationCollapseLeft()]) }
                    operatorBegin={ this.props.transformationCenter + 1 }
                    numberBegin={ this.props.transformationCenter }
                    value={ this.props.sequence }
                />            
            </span>
        );
    }
}

export default NegationTransformation;
