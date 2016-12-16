import mapDispatchToProps from '../src/map-dispatch-to-props';

import {actions} from './utils';

describe('map dispatch to props', () => {
    function cloneAndRemoveCurry() {
        return {
            testAction1: actions.testAction1,
            testAction2: actions.testAction2,
            testAction3: actions.testAction3,
            testAction4: actions.testAction4,
            testAction5: actions.testAction5
        };
    }

    function runTest(actions) {
        return mapDispatchToProps((ret) => {return ret + ' dispatched'}, {getFromActions: actions});
    }

    it('returns object with wrapped dispatch calls for all passed actions', () => {
        var result = runTest(cloneAndRemoveCurry());

        expect(result.testAction1(1)).toBe('1 dispatched');
        expect(result.testAction2(2)).toBe('2 dispatched');
        expect(result.testAction3(3)).toBe('3 dispatched');
        expect(result.testAction4(4)).toBe('4 dispatched');
        expect(result.testAction5(5)).toBe('5 dispatched');
    });

    it(`returns empty object if getFromActions property is null or undefined`, () => {
        expect(runTest()).toEqual({});
        expect(runTest(null)).toEqual({});
    });

    it('ignores "CURRY" property', () => {
        expect(runTest(actions).CURRY).not.toBeDefined();
    });
});