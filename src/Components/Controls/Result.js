import React from 'react'
import { combineStyles } from '../../Utils/Utils';

const style = {
    fontSize: '4em',
}

const result = (props) => (
    <input
        onKeyDown={ props.onKeyDown }
        style={ combineStyles([style, props.style]) }
    />
);

export default result;