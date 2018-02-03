import mapStateToProps from '../map-state-to-props';

function getDefault(first) {
    // coercive equality used to test for null as well.
    // noinspection EqualityComparisonWithCoercionJS
    return first == undefined ? [] : first;
}

export function discardNullOrEmpty(first, second) {
    first = getDefault(first);
    second = getDefault(second);

    if (first.length + second.length === 0) {
        return undefined;
    }
    if (first.length) {
        if (second.length) {
            return false;
        }
        return first;
    }
    return second;
}

export default function (stateDefs, curry) {
    stateDefs = getDefault(stateDefs);
    curry = getDefault(curry);

    if (!(typeof stateDefs === 'string' || Array.isArray(stateDefs))) {
        throw new TypeError(`"stateDefs" must be an array or a string, instead got ${typeof stateDefs}`);
    }
    if (!(typeof curry === 'string' || Array.isArray(curry))) {
        throw new TypeError(`"curry" must be an array or a string, instead got ${typeof curry}`);
    }

    if (stateDefs.length + curry.length === 0) {
        return mapStateToProps;
    }
    return function (state, props) {
        let remnant = discardNullOrEmpty(stateDefs, props.getFromState);
        props.getFromState = remnant !== false ? remnant : [].concat(props.getFromState).concat(stateDefs);

        remnant = discardNullOrEmpty(curry, props.curryActionsWith);
        props.curryActionsWith = remnant !== false ? remnant : [...props.curryActionsWith, ...curry];

        return mapStateToProps(state, props);
    };
}
