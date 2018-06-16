import './Animations.css';

export const sequenceStyle = {
    display: 'inline-flex',
}

const animationDuration = 1000;

export const animationOuterSpinStyle = {
    animation: 'animation-outer-spin ' + animationDuration + 'ms ease-out infinite',
}

export const animationInnerSpinStyle = {
    animation: 'animation-inner-spin ' + animationDuration + 'ms ease-out infinite',
}