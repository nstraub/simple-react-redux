import traverse from '../src/traverse'

import {state} from './utils';

describe('object traversal function', () => {
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
        expect(() => runTest(['nonexistent', 'value'])).toThrowError('nonexistent');
    });

    it('throws error if supplied path has a null value', () => {
        expect(() => runTest(['second', 'value'])).toThrowError('second');
    });

    it('gets a value from an array', () => {
        expect(runTest(['arr', 1])).toBe('two');
    });

    it('gets a value from an array', () => {
        expect(runTest(['arr', 2, 'value'])).toBe('array test value');
    });
});
