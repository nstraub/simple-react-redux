import mapStateToProps from '../src/map-state-to-props/index';

import {state, testCurry} from './utils';

describe('map state to props', () => {
    function runTest (paths) {
        return mapStateToProps(state, {getFromState: paths});
    }

    it('returns an object with correct values when one path is passed', () => {
        var result = {
            secondLevel: {
                value: 'second level test value'
            }
        };

        expect(runTest('firstLevel.secondLevel')).toEqual(result);
    });

    it('returns an object with correct values when multiple paths are passed', () => {
        var result = {
            secondLevel: {
                value: 'second level test value'
            },
            test: 'first level test value'
        };

        expect(runTest(['firstLevel.secondLevel', 'firstLevel.test'])).toEqual(result);
    });

    it('logs an error on the console when intervening property value is null or undefined', () => {
        runTest(['firstLevel.nonexistent.secondLevel']);
        expect(console.error).toHaveBeenCalledWith(
            `value "firstLevel.nonexistent.secondLevel" is inaccessible: "nonexistent" does not exist`);
    });

    it('Asserts passed path is either string or object', () => {
        expect(() => runTest(1234)).toThrowError('"getFromState" must be an array or a string, instead got number');
        expect(() => runTest('test')).not.toThrowError('"getFromState" must be an object or a string, instead got number');
        expect(() => runTest('[]')).not.toThrowError('"getFromState" must be an object or a string, instead got number');
    });

    it('Continues parsing values if there are invalid paths', () => {
        var result = {
            test: 'first level test value'
        };
        expect(runTest(['firstLevel.nonexistent.secondLevel', 'firstLevel.test'])).toEqual(result);
    });

    afterEach(()=> console.error.calls.reset());

    describe('action currying', () => {
        function runTest(curry, expected) {
            var result = mapStateToProps(state, {curryActionsWith: curry});

            expect(result.CURRY).toBeDefined();
            expect(result.CURRY).toEqual(expected);
        }

        it('adds curry array with values to return object when one property is passed', () => {
            runTest(testCurry[0], ['second level test value']);
        });

        it('adds curry array with values to return object when multiple properties are passed', () => {
            runTest(testCurry, ['second level test value', 'first level test value']);
        });

        it('pushes null onto curry array for unavailable properties', () => {
            runTest(['firstLevel.secondLevel.value', 'firstLevel.nonexistent.value', 'firstLevel.test'], ['second level test value', undefined, 'first level test value']);
        });

        it('logs a warning when one of the curried properties is unavailable', () => {
            mapStateToProps(state, {curryActionsWith: ['firstLevel.nonexistent.value']});

            expect(console.warn).toHaveBeenCalledWith('WARNING: "firstLevel.nonexistent.value" does not exist. undefined will be assigned instead of desired value');
        });

        it(`doesn't make a CURRY property if no currying is needed`, () => {
            var result = mapStateToProps(state, {});

            expect(result.CURRY).not.toBeDefined();
        });

        afterEach(()=> console.warn.calls.reset());
    });
});
