import traverse from '../src/traverse';

import {state} from './utils';

export default () => {
    function initPath(rest) {
        return ['firstLevel'].concat(rest);
    }

    function runTest(subsequentPath) {
        return traverse(state, initPath(subsequentPath));
    }

    it('gets value for supplied path', () => {
        expect(runTest(['secondLevel', 'value'])).toBe('second level test value');
    });

    it('throws error if supplied path doesn\'t exist', () => {
        expect(() => runTest(['nonexistent', 'value'])).toThrowError('"nonexistent" does not exist');
    });

    it('throws error if supplied path has a null value', () => {
        expect(() => runTest(['second', 'value'])).toThrowError('"second" does not exist');
    });

    it('returns null if last property value is null or undefined', () => {
        expect(runTest('second')).toBeNull();
        expect(runTest('nothing')).toBeNull();
    });

    it('gets a value from an array', () => {
        expect(runTest(['arr', 1])).toBe('two');
    });

    it('gets a value from an array', () => {
        expect(runTest(['arr', 2, 'value'])).toBe('array test value');
    });
};