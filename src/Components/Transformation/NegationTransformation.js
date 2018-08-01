import React, { Component } from 'react'

import Sequence from '../Sequence/Sequence';
import { combineStyles } from '../../Utils/Utils';
import { inlineFlexStyle, animationCollapseRight, animationCollapseLeft, animationDrop, animationNegationColor } from '../../Styles/Styles';
import { colorNeutralGray } from '../../Styles/Colors';
import * as durations from '../../Styles/Durations';

class NegationTransformation extends Component {

    componentDidMount() {
        setTimeout(this.onDone, durations.NEGATION);
    }

    render() {
        if (
            this.props.transformationCenter === undefined 
            || this.props.transformationCenter < 1
        ) {
            return undefined;
        }
        const transformationStart = 
            <Sequence
                style={ combineStyles([inlineFlexStyle, animationCollapseRight(durations.NEGATION)]) }
                numberEnd={ this.props.transformationCenter - 1 }
                operatorBegin={ 1 }
                operatorEnd={ this.props.transformationCenter - 1 }
                value={ this.props.sequence }
            />;
        const transformationOperator =           
            <Sequence
                style={ combineStyles([inlineFlexStyle, animationDrop(durations.NEGATION)]) }
                numberHide
                operatorBegin={ this.props.transformationCenter }
                operatorEnd={ this.props.transformationCenter }
                value={ this.props.sequence }
            />;
        const transformationNumber =            
            <Sequence
                style={ combineStyles([inlineFlexStyle, animationCollapseLeft(durations.NEGATION)]) }
                numberBegin={ this.props.transformationCenter }
                numberEnd={ this.props.transformationCenter }
                numberStyle={ animationNegationColor(durations.NEGATION) }
                operatorHide
                value={ this.props.sequence }
            />;
        let transformationEnd = undefined;
        if (this.props.sequence.length > 2) {
            transformationEnd =
                <Sequence
                    style={ combineStyles([inlineFlexStyle, animationCollapseLeft(durations.NEGATION)]) }
                    numberBegin={ this.props.transformationCenter + 1 }
                    operatorBegin={ this.props.transformationCenter + 1 }
                    value={ this.props.sequence }
                />;
        }
        return (
            <span>
                { transformationStart }
                { transformationOperator }
                { transformationNumber }
                { transformationEnd }
            </span>
        );
    }

    onDone = () => {
        if (this.props.onDone) {
            this.props.onDone();
        }
    }
}

export default NegationTransformation;
