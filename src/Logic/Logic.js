export function calculate(sequence) {
    // zzz error checking
    let result = 0;
    sequence.forEach((element) => {
        switch (element.operator) {
            case Operator.PLUS:
                result = result + element.number;
                break;
            case Operator.MINUS:
                result = result - element.number;
                break;
            default:
        }
    });
    return result;
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

export function getNegationTransformationParams(sequence, index) {
    // zzz error checking
    return {
        center: index,
    }
}

export function getNegationTransformationResult(sequence, params) {
    // zzz error checking
    const newSequence = [...sequence];
    switch (newSequence[params.center].operator) {
        case Operator.PLUS:
            newSequence[params.center].operator = Operator.MINUS;
            break;
        case Operator.MINUS:
            newSequence[params.center].operator = Operator.PLUS;
            break;
        default:
    }
    newSequence[params.center].number = -newSequence[params.center].number;
    return newSequence
}

export function getSequence(min, max, maxLength) {
    if (min > max) {
        return [];
    }
    let subtotal = rnd(min, max);
    let element = {
        operator: Operator.PLUS, 
        number: subtotal
    }
    const sequence = [element];
    const length = rnd(2, Math.max(2, maxLength));
    for (let i = 1; i < length; ++i) {
        if (Math.floor(Math.random() * 2) === 0) {
            element = {    
                operator: Operator.PLUS,
                number: rnd(Math.max(min, min - subtotal), Math.min(max, max - subtotal))
            }
            subtotal = subtotal + element.number;
        } else {
            element = {
                operator: Operator.MINUS,
                number: rnd(Math.max(min, min + subtotal), Math.min(max, max + subtotal))
            }
            subtotal = subtotal - element.number;
        }
        sequence.push(element);
    }
    return sequence;
}

export const Operator = {
    PLUS: 0,
    MINUS: 1
}

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
