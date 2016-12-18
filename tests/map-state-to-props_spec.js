import mapStateToProps from '../src/map-state-to-props';

import {state, actions} from './utils';

describe('map state to props', () => {
    function runTest (paths) {
        return mapStateToProps(state, {getFromState: paths});
    }


    it('returns an object with correct values', () => {
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
            'value "firstLevel.nonexistent.secondLevel" is inaccessible: firstLevel.nonexistent cannot be resolved');
    });

    afterEach(()=> console.error.calls.reset());

    describe('action currying', () => {
        function runTest(curry, expected) {
            var result = mapStateToProps(state, {getFromActions: {CURRY: curry}});
            expect(result.CURRY).toBeDefined();
            expect(result.CURRY).toEqual(expected);
        }

        it('adds curry array with values to return object', () => {
            runTest(actions.CURRY, ['second level test value', 'first level test value']);
        });

        it('pushes null onto curry array for unavailable properties', () => {
            runTest(['firstLevel.secondLevel.value', 'firstLevel.nonexistent.value', 'firstLevel.test'], ['second level test value', null, 'first level test value']);
        });

        it('logs a warning when one of the curried properties is unavailable', () => {
            mapStateToProps(state, {getFromActions: {CURRY: ['firstLevel.nonexistent.value']}});
            expect(console.warn).toHaveBeenCalledWith('WARNING: "firstLevel.nonexistent.value" does not exist. null will be assigned in place of the desired value');
        });

        afterEach(()=> console.warn.calls.reset());
    });
});
