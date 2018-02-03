import {isPlainObject} from 'lodash/lang';

export default function (dispatch, componentProps) {
    const ret = {};
    let actions = componentProps.getFromActions;

    //noinspection EqualityComparisonWithCoercionJS
    if (actions != undefined) { // coercive inequality is used to check against null as well
        if (!isPlainObject(actions)) {
            throw new TypeError(`"getFromActions" must be an object, instead got ${typeof actions}`);
        }
        Object.keys(actions).forEach(function (action) {
            ret[action] = function (...args) {
                return dispatch(actions[action](...args));
            };
        });
    }
    return ret;
}
