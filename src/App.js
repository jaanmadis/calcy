import React, { Component } from 'react';

import CommutativeTransformation from './Components/Transformation/CommutativeTransformation';
import Equal from './Components/Operators/Equal';
import Result from './Components/Controls/Result';
import Submit from './Components/Controls/Submit';
import Sequence from './Components/Sequence/Sequence';
import { combineStyles } from './Utils/Utils';
import { animationAccepted, animationPresented, animationRejected, inlineFlexStyle } from './Styles/Styles';
import { calculate, getCommutativeTransformationParams, getCommutativeTransformationResult, getSequence } from './Logic/Logic';

const DURATION = 1000;
const ENTER_KEY_CODE = 13;
const VALID_INPUT = /^-?[0-9]*$/;

const style = {
    textAlign: 'center',
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = this.getNewState();
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

        /*
        
        zzz
        this is wrong
        we want to animationRejected when user keeps submitting same thing over again
        also, when user clear entry, we'll be back to animationPresented which is also incorrect
        
        */

        const resultStyle = 
            this.state.result.accepted
                ? animationAccepted(DURATION)
                // : this.state.result.presented
                //     ? animationPresented(DURATION)
                    : this.state.result.rejected 
                        ? animationRejected(DURATION) 
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

    getNewState = () => {
        const sequence = getSequence(0, 20, 5);
        return {
            sequence: sequence,
            commutativeTransformationParams: undefined,
            result: {
                expected: calculate(sequence),
                value: '',
                accepted: false,
                presented: true,
                rejected: false,
            }
        };
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
            // if (accepted) {
            //     setTimeout(this.onAccepted, DURATION);
            // }
        }
    }

    handlePlusClick = (index) => {
        this.setState({
            commutativeTransformationParams: getCommutativeTransformationParams(this.state.sequence, index),
        });
    }

    // onAccepted = () => {
    //     this.setState(
    //         this.getNewState()
    //     );
    // }
}

export default App;
