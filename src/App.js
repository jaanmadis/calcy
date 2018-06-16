import React, { Component } from 'react';

import CommutativeTransformation from './Components/Transformation/CommutativeTransformation';

// import logo from './logo.svg';
// import Operator1 from './Components/Operators/Operator';
import Number from './Components/Number/Number';
import Plus from './Components/Operators/Plus/Plus';
import Sequence from './Components/Sequence/Sequence';

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
        return(
            <div>
                <Sequence
                    onPlusClick={ this._handlePlusClick }
                    sequence={ this.state.sequence }
                />
                <CommutativeTransformation 
                    numbers={ [11, -2] }
                    operator={ '+' }
                />
                <Sequence
                    onPlusClick={ this._handlePlusClick }
                    sequence={ this.state.sequence.slice(2) }
                />
            </div>
        );
    }
}

export default App;
