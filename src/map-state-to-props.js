import traverse from './traverse';


function populateCurryData(paths, state) {
    return paths && {CURRY: paths.map(function (path) {
        try {
            return traverse(state, path.split('.'));
        } catch (e) {
            console.warn(`WARNING: "${path}" does not exist. null will be assigned in place of the desired value`);
            return null;
        }
    })};
}

function populateStateData(paths, state) {
    return paths && paths.reduce(function (previous, current) {
        try {
            previous[current.substr(current.lastIndexOf('.') + 1)] = traverse(state, current.split('.'));
        } catch (e) {
            console.error(`value "${current}" is inaccessible: ${current.replace(new RegExp(`^(.*${e.message}).*$`), '$1')} cannot be resolved`);
        }
        return previous;
    }, {});
}
export default function (state, componentProps) {
    return Object.assign({},
            populateStateData(componentProps.getFromState, state),
            populateCurryData(componentProps.getFromActions && componentProps.getFromActions.CURRY, state));
}
