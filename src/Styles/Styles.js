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

export const animationWrong = (duration = 1000) => ({
    animation: 'animation-wrong ' + duration + 'ms ease-out forwards',
});
