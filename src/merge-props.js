export default function mergeProps(state, actions) {
    if (state.CURRY) {
        let curry = state.CURRY;
        delete state.CURRY;

        Object.keys(actions).forEach(function (key) {
            var action = actions[key];
            actions[key] = function(...args) {
                return action.apply(null, curry.concat(args));
            };
        });
    }
    return Object.assign({}, state, actions);
}