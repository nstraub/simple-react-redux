import mapStateToProps from '../src/map-state-to-props';
import {_object} from './utils';

describe('map state to props', () => {
    function runTest (paths) {
        return mapStateToProps(_object, {getFromState: paths});
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
            'value "firstLevel.nonexistent.secondLevel" is inaccessible: firstLevel.nonexistent cannot be resolved')
    });

    it('returns null if last property value is null or undefined', () => {
        expect(runTest(['firstLevel.second']).second).toBeNull();
        expect(console.error).not.toHaveBeenCalled();
    });

    afterEach(()=> console.error.calls.reset());

    describe('action currying', () => {
        it('adds curry array with values to return object', () => {});
        it('logs a warning when one of the curried properties is unavailable', () => {});
        it('pushes null onto curry array for unavailable properties', () => {});
        it('', () => {});
    });
});
