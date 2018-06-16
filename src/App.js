import React, { Component } from 'react';
import logo from './logo.svg';
import Operator1 from './Components/Operators/Operator';
import Number from './Components/Number/Number';
import Plus from './Components/Operators/Plus/Plus';
import { combineStyles } from './Utils/Utils';
import './App.css';

/** */

const Operator = {
    PLUS: 0,
    MINUS: 1
}

const animationDuration = 1000;

const sequenceStyle = {
    display: 'inline-flex',
}

const animationOuterSpinStyle = {
    animation: 'animation-outer-spin ' + animationDuration + 'ms ease-out infinite',
}

const animationInnerSpinStyle = {
    animation: 'animation-inner-spin ' + animationDuration + 'ms ease-out infinite',
}

class CommutativeTransformation extends Component {
    render() {
        return (
            <span 
                style={ combineStyles([sequenceStyle, animationOuterSpinStyle]) }
            >
                <Number
                    style={ animationInnerSpinStyle }
                    value={ this.props.numbers[0] }
                />
                <Plus
                    style={ animationInnerSpinStyle }
                />
                <Number
                    style={ animationInnerSpinStyle }
                    value={ this.props.numbers[1] }
                />
            </span>
        );
    }
}

/** */

class App extends Component {
    state = {
        sequence: [
            { operator: Operator.PLUS, number: 1, },
            { operator: Operator.PLUS, number: 2, },
            { operator: Operator.PLUS, number: 3, },
            { operator: Operator.PLUS, number: 4, },
            { operator: Operator.PLUS, number: 5, }
        ],
    }

    ____addNumber = () => {
        const newNumbers = [...this.state.numbers];
        newNumbers.push(Math.floor(Math.random() * 10));
        this.setState({
            numbers: newNumbers,
        })
    }

    ____handleNumberClick = (id) => {
        if ((id === 0) || (id === this.state.numbers.length - 1)) {
            return;
        }
        const newNumbers = [...this.state.numbers];
        const n = newNumbers[id - 1];
        newNumbers[id - 1] = newNumbers[id + 1];
        newNumbers[id + 1] = n;
        this.setState({ 
            numbers: newNumbers,
        });
    }

    ____handleOperatorClick2 = (index) => {
        if ((typeof index !== 'number') || (index < 0) || (index >= this.state.numbers.length - 1)) {
            return;
        }
        const newNumbers = [...this.state.numbers];
        const n = newNumbers[index];
        newNumbers[index] = newNumbers[index + 1];
        newNumbers[index + 1] = n;
        this.setState({
            numbers: newNumbers,
        });
    }

    ____handleOperatorClick = (index) => {
        if ((typeof index !== 'number') || (index < 0) || (index >= this.state.numbers.length - 1)) {
            return;
        }
        this.setState({
            operatorFlipIndex: index,
        });
    }

    _handlePlusClick = (index) => {
        if ((index < 1) || (index >= this.state.sequence.length)) {
            return;
        }
        let newSequence = [...this.state.sequence];
        const element = newSequence.splice(index, 1)[0];
        newSequence.splice(index - 1, 0, element);
        this.setState({
            sequence: newSequence
        });
    }

    render() {
        const sequence = this.state.sequence.map((element, index) => {
            const operator = 
                <Plus
                    id={ index }
                    onClick={ this._handlePlusClick }
                />
            return (
                <span 
                    key={ element.number.toString() + index }
                    style={ sequenceStyle }
                >
                    { index > 0 ? operator : null }
                    <Number 
                        value={ element.number }
                    />
                </span>
            );
        });

        return(
            <div>
                <CommutativeTransformation 
                    numbers={ [11, -2] }
                    operator={ '+' }
                />
                { sequence }
            </div>
        );
    }
}

export default App;
