export default function (dispatch, componentProps) {
    var ret = {},
        actions = componentProps.getFromActions;

    if (actions != undefined) {
        actions.CURRY && delete actions.CURRY;

        Object.keys(actions).forEach(function (action) {
            ret[action] = function (...args) {
                return dispatch(actions[action](...args));
            }
        });
    }
    return ret;
};