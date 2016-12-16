import traverse from '../src/traverse'

describe('object traversal function', () => {

    var _path, _object = {
        firstLevel: {
            secondLevel: {
                value: 'test value'
            },
            second: null,
            arr: ['one', 'two', {value: 'test value'}]
        },
    };

    function initPath(rest) {
        _path = ['firstLevel'].concat(rest);
    }

    it('gets a value for the supplied path', () => {
        initPath(['secondLevel', 'value']);
        expect(traverse(_object, _path)).toBe('test value');
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
        expect(traverse(_object, _path)).toBe('test value');
    });
});