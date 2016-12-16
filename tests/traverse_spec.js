import traverse from '../src/traverse'

import {_object} from './utils';

describe('object traversal function', () => {
    var _path;

    function initPath(rest) {
        _path = ['firstLevel'].concat(rest);
    }

    it('gets a value for the supplied path', () => {
        initPath(['secondLevel', 'value']);
        expect(traverse(_object, _path)).toBe('second level test value');
    });

    it('throws error if supplied path doesn`t exist', () => {
        initPath(['nonexistant', 'value']);
        expect(() => traverse(_object, _path)).toThrowError('nonexistant');
    });

    it('throws error if supplied path has a null value', () => {
        initPath(['second', 'value']);
        expect(() => traverse(_object, _path)).toThrowError('second');
    });

    it('gets a value from an array', () => {
        initPath(['arr', 1]);
        expect(traverse(_object, _path)).toBe('two');
    });

    it('gets a value from an array', () => {
        initPath(['arr', 2, 'value']);
        expect(traverse(_object, _path)).toBe('array test value');
    });
});
