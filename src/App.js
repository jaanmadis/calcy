import React, { Component } from 'react';

import CommutativeTransformation from './Components/Transformation/CommutativeTransformation';
import NegationTransformation from './Components/Transformation/NegationTransformation';
import Equal from './Components/Operators/Equal';
import Result from './Components/Controls/Result';
import Submit from './Components/Controls/Submit';
import Sequence from './Components/Sequence/Sequence';
import Timer from './Components/Timer/Timer';
import { combineStyles } from './Utils/Utils';
import { animationAccepted, animationPresented, animationRejected, animationCollapseLeft, inlineFlexStyle } from './Styles/Styles';
import { calculate, 
    getCommutativeTransformationParams, getCommutativeTransformationResult, 
    getNegationTransformationParams, getNegationTransformationResult, 
    getSequence } from './Logic/Logic';
import * as durations from './Styles/Durations';

const ENTER_KEY_CODE = 13;
const VALID_INPUT = /^-?[0-9]*$/;

const style = {
    padding: '4em',
    textAlign: 'center',
};

class App extends Component {

    animationHandle = undefined;

    constructor(props) {
        super(props);
        this.state = this.getNewState();
    }

    componentWillUnmount() {
        if (this.animationHandle !== undefined) {
            clearTimeout(this.animationHandle);
        }
    }

    render() {
        let sequence = undefined;
        let postSequenceStyle = undefined;
        if (this.state.commutativeTransformationParams) {
            sequence = (
                <CommutativeTransformation 
                    onDone={ this.handleCommutativeTransformationDone }
                    sequence={ this.state.sequence }
                    transformationBegin={ this.state.commutativeTransformationParams.begin }
                    transformationCenter={ this.state.commutativeTransformationParams.center }
                    transformationEnd={ this.state.commutativeTransformationParams.end }
                />
            );
        } else if (this.state.negationTransformationParams) {
            sequence = (
                <NegationTransformation
                    onDone={ this.handleNegationTransformationDone } 
                    sequence={ this.state.sequence }
                    transformationCenter={ this.state.negationTransformationParams.center }
                />
            );
            postSequenceStyle = combineStyles([inlineFlexStyle, animationCollapseLeft(durations.NEGATION)]);
        } else {
            sequence = (
                <Sequence
                    onNumberClick={ this.handleNumberClick }
                    onPlusClick={ this.handlePlusClick }
                    operatorBegin={ 1 }
                    style={ inlineFlexStyle }
                    value={ this.state.sequence }
                />            
            );
        }

        const resultStyle = 
            this.state.result.accepted
                ? animationAccepted(durations.RESULT)
                : this.state.result.presented
                    ? animationPresented(durations.RESULT)
                    : this.state.result.rejected 
                        ? animationRejected(durations.RESULT) 
                        : undefined;

        if (resultStyle && !this.animationHandle) {
            this.animationHandle = setTimeout(this.onAnimationTimeout, durations.RESULT);
        }

        return(
            <div
                style={ combineStyles([style, resultStyle]) }
            >
                { sequence }
                <span
                    style={ combineStyles([inlineFlexStyle, postSequenceStyle]) }
                >
                    <Equal />
                    <Result 
                        onChange={ this.handleResultChange }
                        onKeyDown={ this.handleResultKeyDown }
                        value={ this.state.result.value }
                    />
                    <Submit 
                        onClick={ this.handleSubmitClick }
                    />
                </span>
                <Timer 
                    created={ this.state.created + durations.RESULT }
                    stopped={ this.state.result.accepted }
                />
            </div>
        );
    }

    getNewState = () => {
        const sequence = getSequence(-20, 20, 5);
        return {
            sequence: sequence,
            commutativeTransformationParams: undefined,
            negationTransformationParams: undefined,
            result: {
                expected: calculate(sequence),
                value: '',
                accepted: false,
                presented: true,
                rejected: false,
            },
            created: Date.now()
        };
    }

    handleCommutativeTransformationDone = () => {
        this.setState({
            sequence: getCommutativeTransformationResult(this.state.sequence, this.state.commutativeTransformationParams),
            commutativeTransformationParams: undefined,
        });
    }

    handleNegationTransformationDone = () => {
        this.setState({
            sequence: getNegationTransformationResult(this.state.sequence, this.state.negationTransformationParams),
            negationTransformationParams: undefined,
        });
    }

    handleResultKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            this.handleSubmitClick();
        }
    }

    handleResultChange = (event) => {
        const value = event.target.value;
        if (VALID_INPUT.test(value) && !this.state.result.accepted) {
            const newResult = {
                ...this.state.result
            };
            newResult.value = value;
            newResult.accepted = false;
            newResult.rejected = false;
            this.setState({
                result: newResult
            });
        }
    }

    handleSubmitClick = (event) => {
        if (!this.state.result.accepted) {
            const newResult = {
                ...this.state.result
            };
            const accepted = this.state.result.value == this.state.result.expected;
            newResult.accepted = accepted;
            newResult.rejected = !accepted;
            this.setState({
                result: newResult
            });
        }
    }

    handleNumberClick = (index) => {
        if (index > 0 && this.state.sequence[index].number < 0) {
            this.setState({
                negationTransformationParams: getNegationTransformationParams(this.state.sequence, index),
            });
        }
    }

    handlePlusClick = (index) => {
        this.setState({
            commutativeTransformationParams: getCommutativeTransformationParams(this.state.sequence, index),
        });
    }

    onAnimationTimeout = () => {
        this.animationHandle = undefined;
        if (this.state.result.accepted) {
            this.setState(
                this.getNewState()
            );
        } else {
            const newResult = {
                ...this.state.result
            }
            newResult.accepted = false;
            newResult.presented = false;
            newResult.rejected = false;
            this.setState({
                result: newResult
            });
        }
    }
}

export default App;
