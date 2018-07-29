import React, { Component } from 'react';

import { colorNeutralGray } from '../../Styles/Colors';

const style = {
    color: colorNeutralGray,
    fontSize: '2em',
    padding: '4em',
}

const INTERVAL = 100;

class Timer extends Component {

    handle = undefined;
    state = {
        duration: ''
    }

    componentWillUnmount() {
        if (this.handle !== undefined) {
            clearInterval(this.handle);
        }
    }

    componentDidMount() {
        this.handle = setInterval(this.onInterval, INTERVAL);
    }

    render() {
        return(
            <div
                style={ style }
            >
                { this.state.duration }
            </div>
        );
    }

    onInterval = () => {
        this.setState({
            duration: Number.parseFloat((Date.now() - this.props.created) / 1000).toFixed(1) + 's'
        });
    }
}

export default Timer;
