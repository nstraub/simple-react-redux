import mapCurry from './map-curry';
import mapState from './map-state';

export default function (state, componentProperties) {
    return Object.assign(mapState(state, componentProperties.getFromState),
        mapCurry(state, componentProperties.curryActionsWith));
}
