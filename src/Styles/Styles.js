import './Animations.css';

import { colorPositive, colorNegative } from './Colors';

export const inlineFlexStyle = {
    display: 'inline-flex',
//    border: '1px solid #AA6817',
}

export const positiveStyle = {
    color: colorPositive,
};

export const negativeStyle = {
    color: colorNegative,
};

export const animationOuterSpinStyle = (duration) => ({
    animation: 'animation-outer-spin ' + duration + 'ms ease-in-out forwards',
});

export const animationInnerSpinStyle = (duration) => ({
    animation: 'animation-inner-spin ' + duration + 'ms ease-in-out forwards',
});

export const animationSlideLeft = (duration) => ({
    animation: 'animation-slide-left ' + duration + 'ms ease-in-out forwards',
});

export const animationAccepted = (duration = 1000) => ({
    animation: 'animation-accepted ' + duration + 'ms ease-out forwards',
});

export const animationPresented = (duration = 1000) => ({
    animation: 'animation-presented ' + duration + 'ms ease-out forwards',
});

export const animationRejected = (duration = 1000) => ({
    animation: 'animation-rejected ' + duration + 'ms ease-out forwards',
});

export const animationCollapseRight = (duration = 1000) => ({
    animation: 'animation-collapse-right ' + duration + 'ms ease-in-out forwards',
    border: '1px solid #ff0000',
});

export const animationCollapseLeft = (duration = 1000) => ({
    animation: 'animation-collapse-left ' + duration + 'ms ease-in-out forwards',
    border: '1px solid #00ff00',
});
