import './Animations.css';

export const animationInlineFlexStyle = {
    display: 'inline-flex',
//    border: '1px solid #AA6817',
}

export const animationOuterSpinStyle = (duration) => ({
    animation: 'animation-outer-spin ' + duration + 'ms ease-in-out forwards',
});

export const animationInnerSpinStyle = (duration) => ({
    animation: 'animation-inner-spin ' + duration + 'ms ease-in-out forwards',
});

export const animationSlideLeft = (duration) => ({
    animation: 'animation-slide-left ' + duration + 'ms ease-in-out forwards',
});
