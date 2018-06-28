export function getCommutativeTransformationParams(sequence, index) {
    // zzz error checking
    return {
        begin: index - 1,
        center: index,
        end: index + 1
    };
}

export function getCommutativeTransformationResult(sequence, params) {
    // zzz error checking
    const newSequence = [...sequence];
    const elements = newSequence.splice(params.center, 1)[0];
    newSequence.splice(params.begin, 0, elements)
    return newSequence;
}