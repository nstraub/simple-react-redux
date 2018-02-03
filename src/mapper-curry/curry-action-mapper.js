import {isPlainObject} from 'lodash/lang';

import mapDispatchToProps from '../map-dispatch-to-props';


export default function (actions) {
    if (!actions || !isPlainObject(actions)) {
        return mapDispatchToProps;
    }
    return function (dispatch, props) {
        if (!props.getFromActions) {
            props.getFromActions = actions;
        } else {
            props.getFromActions = Object.assign({}, actions, props.getFromActions);
        }
        return mapDispatchToProps(dispatch, props);
    }
}
