import React, { Component } from 'react';

import { combineStyles } from '../../Utils/Utils';
import { colorBlackGray, colorDarkGray, colorDarkerGray, colorNeutralGray } from '../../Styles/Colors';

const style = {
    backgroundColor: colorDarkGray,
    border: '4px solid ' + colorNeutralGray,
    borderRadius: '10px',
    color: colorNeutralGray,
    fontSize: '3em',
    marginLeft: '6px',
    outline: 'none',
    width: '100px',
    transition: 'color 500ms, background 500ms',    
}

const hoverStyle = {
    backgroundColor: colorDarkerGray,
    color: colorBlackGray,
}

class Submit extends Component {
    state = {
        isHovering: false,
    }

    render() {
        return (
            <button
                style={ combineStyles([style, this.state.isHovering ? hoverStyle : undefined]) }
                onClick={ this.props.onClick }
                onMouseEnter={ this.handleMouseEnter }
                onMouseLeave={ this.handleMouseLeave }
            >
                { '\u2BC8' }
            </button>
        );
    }

    handleMouseEnter = () => {
        this.setState({
            isHovering: true,
        });
    }

    handleMouseLeave = () => {
        this.setState({
            isHovering: false,
        });
    }
}

export default Submit;