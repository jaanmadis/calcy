import React, { Component } from 'react';

import Equation from './Core/Equation/Equation';
import Menu from './Layout/Menu/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Equation />
            </div>
        );
    }
}

export default App;
