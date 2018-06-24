import React, { Component } from 'react';

import CommutativeTransformation from './Components/Transformation/CommutativeTransformation';
// import NegationTransformation from './Components/Transformation/NegationTransformation';
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
            { operator: Operator.PLUS, number: 5, },
            { operator: Operator.PLUS, number: 6, },
            { operator: Operator.PLUS, number: 7, },
        ],
        commutativeTransformation: false,
        commutativeTransformationIndex: 0,
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

    handlePlusClick = (index) => {
        if (!this.state.canHandleChanges) {
            return;
        }

        this.setState({canHandleChanges: false});

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

    onCommutativeTransformationDone = () => {
        const newSequence = [...this.state.sequence];
        const elements = newSequence.splice(this.state.commutativeTransformationIndex, 1)[0];
        newSequence.splice(this.state.commutativeTransformationIndex - 1, 0, elements)
        this.setState({
            sequence: newSequence,
            commutativeTransformation: false,
            commutativeTransformationIndex: 0,
        });
    }

    onPlusClick = (index) => {
        this.setState({
            commutativeTransformation: true,
            commutativeTransformationIndex: index,
        });
    }

    render() {
        let result = null;
        if (this.state.commutativeTransformation) {
            result = (
                <CommutativeTransformation 
                    onDone={ this.onCommutativeTransformationDone }
                    sequence={ this.state.sequence }
                    transformationBegin={ this.state.commutativeTransformationIndex - 1 }
                    transformationCenter={ this.state.commutativeTransformationIndex }
                    transformationEnd={ this.state.commutativeTransformationIndex + 1 }
                />
            );
        } else {
            result = (
                <Sequence
                    onPlusClick={ this.onPlusClick }
                    operatorBegin={ 1 }
                    value={ this.state.sequence }
                />            
            );
        }

        return(
            <div>
                { result }
            </div>
            //     <CommutativeTransformation 
            //         sequence={ this.state.sequence }
            //         transformationBegin={ 0 }
            //         transformationCenter={ 1 }
            //         transformationEnd={ 2 }
            //     />
            //     <br/>
            //     <CommutativeTransformation 
            //         sequence={ this.state.sequence }
            //         transformationBegin={ 0 }
            //         transformationCenter={ 1 }
            //         transformationEnd={ 3 }
            //     />
            //     <br/>
            //     <CommutativeTransformation 
            //         sequence={ this.state.sequence }
            //         transformationBegin={ 0 }
            //         transformationCenter={ 1 }
            //         transformationEnd={ 7 }
            //     />
            //     <br/>
            //     <CommutativeTransformation 
            //         sequence={ this.state.sequence }
            //         transformationBegin={ 2 }
            //         transformationCenter={ 6 }
            //         transformationEnd={ 7 }
            //     />
            //     <br/>
            //     <CommutativeTransformation 
            //         sequence={ this.state.sequence }
            //         transformationBegin={ 3 }
            //         transformationCenter={ 6 }
            //         transformationEnd={ 7 }
            //     />
            //     <br/>
            //     <CommutativeTransformation 
            //         sequence={ this.state.sequence }
            //         transformationBegin={ 4 }
            //         transformationCenter={ 6 }
            //         transformationEnd={ 7 }
            //     />
            //     <br/>
            //     <CommutativeTransformation 
            //         sequence={ this.state.sequence }
            //         transformationBegin={ 5 }
            //         transformationCenter={ 6 }
            //         transformationEnd={ 7 }
            //     />
            // </div>
        );
    }
}

// add onclicks to alll numbers and operators

export default App;
