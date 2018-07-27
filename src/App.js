import React, { Component } from 'react';

import CommutativeTransformation from './Components/Transformation/CommutativeTransformation';
import Equal from './Components/Operators/Equal';
import Result from './Components/Controls/Result';
import Submit from './Components/Controls/Submit';
import Sequence from './Components/Sequence/Sequence';
import { inlineFlexStyle } from './Styles/Styles';
import { getCommutativeTransformationParams, getCommutativeTransformationResult } from './Logic/Logic';

const Operator = {
    PLUS: 0,
    MINUS: 1
}

const ENTER_KEY_CODE = 13;
const VALID_INPUT = /^-?[0-9]*$/;

const style = {
    textAlign: 'center',
}

class App extends Component {
    state = {
        sequence: [
            { operator: Operator.PLUS, number: 1, },
            { operator: Operator.PLUS, number: 22, },
            { operator: Operator.PLUS, number: 3333, },
            { operator: Operator.PLUS, number: 44444, },
            { operator: Operator.PLUS, number: 555, },
            { operator: Operator.PLUS, number: 66, },
            { operator: Operator.PLUS, number: 7, },
        ],
        commutativeTransformationParams: undefined,
        result: '',
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
        if (VALID_INPUT.test(value)) {
            this.setState({
                result: value,
            });
        }
    }

    handleSubmitClick = (event) => {
        console.log(event);
        console.log('this is submit');
    }

    handlePlusClick = (index) => {
        this.setState({
            commutativeTransformationParams: getCommutativeTransformationParams(this.state.sequence, index),
        });
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

        return(
            <div
                style={ style }
            >
                { sequence }
                <Equal />
                <Result 
                    onChange={ this.handleResultChange }
                    onKeyDown={ this.handleResultKeyDown }
                    value={ this.state.result }
                />
                <Submit 
                    onClick={ this.handleSubmitClick }
                />
            </div>
        );
    }
}

export default App;
