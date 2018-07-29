import React, { Component } from 'react';

import CommutativeTransformation from './Components/Transformation/CommutativeTransformation';
import Equal from './Components/Operators/Equal';
import Result from './Components/Controls/Result';
import Submit from './Components/Controls/Submit';
import Sequence from './Components/Sequence/Sequence';
import { combineStyles } from './Utils/Utils';
import { animationAccepted, animationRejected, inlineFlexStyle } from './Styles/Styles';
import { calculate, getCommutativeTransformationParams, getCommutativeTransformationResult, getSequence } from './Logic/Logic';

const ENTER_KEY_CODE = 13;
const VALID_INPUT = /^-?[0-9]*$/;

const style = {
    textAlign: 'center',
}

// plus, positive
// plus, negative   ??
// minus, positive  ??
// minus, negative  ??

class App extends Component {
    state = {
        sequence: [],
        commutativeTransformationParams: undefined,
        result: {
            expected: 0,
            value: '',
            accepted: false,
            rejected: false,
        }
    }

    constructor(props) {
        super(props);
        this.state.sequence = getSequence(0, 20, 5); // generate negative numbers too zzz
        this.state.result.expected = calculate(this.state.sequence);
    }    

    render() {
        let sequence = undefined;
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
        } else {
            sequence = (
                <Sequence
                    onPlusClick={ this.handlePlusClick }
                    operatorBegin={ 1 }
                    style={ inlineFlexStyle }
                    value={ this.state.sequence }
                />            
            );
        }

        const resultStyle = 
            this.state.result.accepted
                ? animationAccepted() 
                : this.state.result.rejected 
                    ? animationRejected() 
                    : undefined;

        return(
            <div
                style={ combineStyles([style, resultStyle]) }
            >
                { sequence }
                <Equal />
                <Result 
                    onChange={ this.handleResultChange }
                    onKeyDown={ this.handleResultKeyDown }
                    value={ this.state.result.value }
                />
                <Submit 
                    onClick={ this.handleSubmitClick }
                />
            </div>
        );
    }

    handleCommutativeTransformationDone = () => {
        this.setState({
            sequence: getCommutativeTransformationResult(this.state.sequence, this.state.commutativeTransformationParams),
            commutativeTransformationParams: undefined,
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
            }
            const accepted = this.state.result.value == this.state.result.expected;
            newResult.accepted = accepted;
            newResult.rejected = !accepted;
            this.setState({
                result: newResult
            });
        }
}

    handlePlusClick = (index) => {
        this.setState({
            commutativeTransformationParams: getCommutativeTransformationParams(this.state.sequence, index),
        });
    }
}

export default App;
