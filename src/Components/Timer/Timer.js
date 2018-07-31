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
        duration: undefined
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    componentDidMount() {
        if (!!!this.props.stopped) {
            this.startTimer();
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.stopped && !prevProps.stopped) {
            this.stopTimer();
        } else if(!this.props.stopped && prevProps.stopped) {
            this.startTimer();
        }
    }

    render() {
        return(
            <div
                style={ style }
            >
                { this.state.duration >= 0 ? this.state.duration + 's' : undefined }
            </div>
        );
    }

    onInterval = () => {
        this.setState({
            duration: Number.parseFloat((Date.now() - this.props.created) / 1000).toFixed(1)
        });
    }

    startTimer = () => {
        if (this.handle === undefined) {
            this.handle = setInterval(this.onInterval, INTERVAL);
        }
    }

    stopTimer = () => {
        if (this.handle !== undefined) {
            clearInterval(this.handle);
            this.handle = undefined;
        }
    }
}

export default Timer;
