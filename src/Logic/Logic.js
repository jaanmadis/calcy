export const Operator = {
    PLUS: 0,
    MINUS: 1
}

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

export function calculate(sequence) {
    // zzz error checking
    let result = 0;
    sequence.map((element) => {
        switch (element.operator) {
            case Operator.PLUS:
                result = result + element.number;
                break;
            case Operator.MINUS:
                result = result - element.number;
                break;
        }
    });
    return result;
}
