import curryStateMapper from './curry-state-mapper';
import curryActionMapper from './curry-action-mapper';
import mergeProps from '../merge-props';

export default function ({stateMap, actions, curry}) {
    return [curryStateMapper(stateMap, curry), curryActionMapper(actions), mergeProps];
}
