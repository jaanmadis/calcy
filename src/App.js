import React, { Component } from 'react';

import CommutativeTransformation from './Components/Transformation/CommutativeTransformation';
import Equal from './Components/Operators/Equal';
import Result from './Components/Controls/Result';
import Sequence from './Components/Sequence/Sequence';
import { animationInlineFlexStyle } from './Styles/Styles';

const Operator = {
    PLUS: 0,
    MINUS: 1
}

const ENTER_KEY_CODE = 13;

class App extends Component {
    state = {
        sequence: [
            { operator: Operator.PLUS, number: 1, },
            { operator: Operator.PLUS, number: 22, },
            { operator: Operator.PLUS, number: 3333, },
            { operator: Operator.PLUS, number: 4444, },
            { operator: Operator.PLUS, number: 555, },
            { operator: Operator.PLUS, number: 66, },
            { operator: Operator.PLUS, number: 7, },
        ],
        commutativeTransformation: false,
        commutativeTransformationIndex: 0,
    }

    handleCommutativeTransformationDone = () => {
        const newSequence = [...this.state.sequence];
        const elements = newSequence.splice(this.state.commutativeTransformationIndex, 1)[0];
        newSequence.splice(this.state.commutativeTransformationIndex - 1, 0, elements)
        this.setState({
            sequence: newSequence,
            commutativeTransformation: false,
            commutativeTransformationIndex: 0,
        });
    }

    handleResultKeyDown = (event) => {
        console.log(event.keyCode === ENTER_KEY_CODE);
    }

    handlePlusClick = (index) => {
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
                    onDone={ this.handleCommutativeTransformationDone }
                    sequence={ this.state.sequence }
                    transformationBegin={ this.state.commutativeTransformationIndex - 1 }
                    transformationCenter={ this.state.commutativeTransformationIndex }
                    transformationEnd={ this.state.commutativeTransformationIndex + 1 }
                />
            );
        } else {
            result = (
                <Sequence
                    onPlusClick={ this.handlePlusClick }
                    operatorBegin={ 1 }
                    style={ animationInlineFlexStyle }
                    value={ this.state.sequence }
                />            
            );
        }

        return(
            <div>
                { result }
                <Equal />
                <Result 
                    onKeyDown={ this.handleResultKeyDown }
                />
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
