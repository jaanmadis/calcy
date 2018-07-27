import React, { Component } from 'react';

import CommutativeTransformation from './Components/Transformation/CommutativeTransformation';
import Equal from './Components/Operators/Equal';
import Result from './Components/Controls/Result';
import Sequence from './Components/Sequence/Sequence';
import { inlineFlexStyle } from './Styles/Styles';
import { getCommutativeTransformationParams, getCommutativeTransformationResult } from './Logic/Logic';

const Operator = {
    PLUS: 0,
    MINUS: 1
}

const ENTER_KEY_CODE = 13;

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
    }

    handleCommutativeTransformationDone = () => {
        this.setState({
            sequence: getCommutativeTransformationResult(this.state.sequence, this.state.commutativeTransformationParams),
            commutativeTransformationParams: undefined,
        });
    }

    handleResultKeyDown = (event) => {
        console.log(event.keyCode === ENTER_KEY_CODE);
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

export default App;
