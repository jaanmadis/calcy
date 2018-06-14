import React, { Component } from 'react';
import logo from './logo.svg';
import Operator1 from './Components/Operators/Operator';
import Number from './Components/Number/Number';
import Plus from './Components/Operators/Plus/Plus';
import { combineStyles } from './Utils/Utils';
import './App.css';

/** */

const animationDuration = 1000;

const sequenceStyle = {
    display: 'inline-flex',
}

const animationOuterSpinStyle = {
    animation: 'animation-outer-spin ' + animationDuration + 'ms ease-out infinite',
}

class CommutativeTransformation extends Component {
    render() {
        return (
            <span 
                style={ combineStyles([sequenceStyle, animationOuterSpinStyle]) }
            >
                <Number
                    value={ this.props.numbers[0] }
                />
                <Operator1
                    value={ this.props.operator }
                />
                <Number
                    value={ this.props.numbers[1] }
                />
            </span>
        );
    }
}

/** */

const Operator = {
    PLUS: 0,
    MINUS: 1
}

class App extends Component {
    state = {
        sequence: [
            { operator: Operator.PLUS, number: 1, },
            { operator: Operator.PLUS, number: 2, },
            { operator: Operator.PLUS, number: 3, },
            { operator: Operator.PLUS, number: 4, },
            { operator: Operator.PLUS, number: 5, }
        ],
        numbers: [1, 2, -3, 4, 5],
        operators: ['+', '-', '+', '-'],
        operator: undefined,
        operatorFlipIndex: 2,
    }

    _addNumber = () => {
        const newNumbers = [...this.state.numbers];
        newNumbers.push(Math.floor(Math.random() * 10));
        this.setState({
            numbers: newNumbers,
        })
    }

    _handleNumberClick = (id) => {
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

    _handleOperatorClick2 = (index) => {
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

    _handleOperatorClick = (index) => {
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
        const sequenceBegin = [];
        const sequenceChange = [];
        const sequenceEnd = [];
        let sequenceA = undefined;
        for (let index = 0; index < this.state.numbers.length; ++index) {
            if (index < this.state.operatorFlipIndex) {
                sequenceA = sequenceBegin;
            } else {
                sequenceA = sequenceEnd;
            }
            sequenceA.push(
                <Number
                    key={ 'Number' + index }
                    value={ this.state.numbers[index] }
                />
            );
            if (index < this.state.operators.length) {
                sequenceA.push(
                    <Operator1
                        id={ index }
                        key={ 'Operator' + index }
                        onClick={ this._handleOperatorClick }
                        value={ this.state.operators[index] }
                    />
                );
            }
        }

        const flip = [];
        if (this.state.operatorFlipIndex !== undefined) {
            flip.push(
                <Number
                    key={ this.state.numbers[this.state.operatorFlipIndex] }
                    animated
                    value={ this.state.numbers[this.state.operatorFlipIndex] }
                />
            );
            flip.push(
                <Operator1
                    animated
                    key={ 'kiiii' }
                    value={ this.state.operators[this.state.operatorFlipIndex] }
                />
            );
            flip.push(
                <Number
                    key={ this.state.numbers[this.state.operatorFlipIndex + 1] }
                    animated
                    value={ this.state.numbers[this.state.operatorFlipIndex + 1] }
                />
            );
            flip.push(
            );
        }

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
                    numbers={ [1, 2] }
                    operator={ '+' }
                />
                { sequence }

                <span className='Sequence'>
                    { sequenceBegin }
                </span>
                { 
                    flip.length > 0 
                    ?
                        <span className='Sequence Sequence-Animation-Outer'>
                            { flip }
                        </span>
                    :
                        undefined
                }
                <span className='Sequence'>
                    { sequenceEnd }
                </span>
            </div>
        );

        // // !!! index is poor key
        // const numbers = this.state.numbers.map((number, index) => {
        //     return (
        //         <Number 
        //             animated={ this.state.animated }
        //             id={ index } 
        //             key={ index } 
        //             onClick={ this._handleNumberClick }
        //             value={ number } 
        //         />)
        // });
        // return (
        //     <div className='App'>
        //         <header className='App-header'>
        //             <img src={logo} className='App-logo' alt='logo' />
        //             <h1 className='App-title'>Welcome to React</h1>
        //         </header>
        //             <div><button onClick={ this._addNumber }>add number</button></div>
        //             <div><button onClick={ this._addAnimation }>add animation</button></div>
        //             { numbers }
        //             {/* <div className='animation'>
        //             { numbers }
        //             </div> */}
        //     </div>
        // );
    }
}

export default App;
