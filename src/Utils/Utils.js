export const combineStyles = (input) => {
    let result = {}
    if (Array.isArray(input)) {
        input.forEach(item => {
            result = {...result, ...item}
        });
    }
    return result;
};
