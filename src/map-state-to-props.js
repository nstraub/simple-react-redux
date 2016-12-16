import traverse from './traverse'

export default function (state, componentProps) {
    var ret = {};
    if (componentProps.getFromState) {
        componentProps.getFromState.forEach(function (path) {
            var props = path.split('.');
            try {
                ret[props.pop()] = traverse(state, path.split('.'));
            } catch (e) {
                if (~props.indexOf(e.message)) {
                    console.error(`value "${path}" is inaccessible: ${props.slice(0, props.indexOf(e.message) + 1).join('.')} cannot be resolved`)
                } else {
                    ret[e.message] = null;
                }
            }
        });
    }
    if (componentProps.getFromActions && componentProps.getFromActions.CURRY) {
        ret.CURRY = componentProps.getFromActions.CURRY.map(function (path) {
            try {
                return traverse(state, path.split('.'));
            } catch (e) {
                console.warn(`WARNING: "${path}" does not exist. null will be assigned in place of the desired value`);
                return null
            }
        });
    }
    return ret;
}
