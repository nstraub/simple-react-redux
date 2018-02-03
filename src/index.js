import {connect} from 'react-redux';
import getCurriedMappers from './mapper-curry';

import mapStateToProps from './map-state-to-props/index';
import mapDispatchToProps from './map-dispatch-to-props';
import mergeProps from './merge-props';
import './extensions';

export default connect(mapStateToProps, mapDispatchToProps, mergeProps);
export function preConnect(stateMap, actions, actionCurry) {
    return connect(...getCurriedMappers(stateMap, actions, actionCurry));
}
