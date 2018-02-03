import mapStateToProps from '../../src/map-state-to-props/index';
import curryStateToPropsMapper from '../../src/mapper-curry/curry-state-mapper';
import {discardNullOrEmpty} from '../../src/mapper-curry/curry-state-mapper';

export default function () {
    it('returns un-curried function if both curry and state are null or empty', function () {
        expect(curryStateToPropsMapper()).toBe(mapStateToProps);
        expect(curryStateToPropsMapper(null)).toBe(mapStateToProps);
        expect(curryStateToPropsMapper(null, null)).toBe(mapStateToProps);
        expect(curryStateToPropsMapper('', '')).toBe(mapStateToProps);
        expect(curryStateToPropsMapper([], [])).toBe(mapStateToProps);
    });
    it('does not throw an error when merging getFromState properties', function () {
        expect(()=>curryStateToPropsMapper('one.two')(null, {})).not.toThrow();
        expect(()=>curryStateToPropsMapper('one.two')(null, {getFromState: 'tes.ting'})).not.toThrow();
        expect(()=>curryStateToPropsMapper('one.two')(null, {getFromState: ['tes.ting']})).not.toThrow();
        expect(()=>curryStateToPropsMapper(['one.two'])(null, {})).not.toThrow();
        expect(()=>curryStateToPropsMapper(['one.two'])(null, {getFromState: 'tes.ting'})).not.toThrow();
        expect(()=>curryStateToPropsMapper(['one.two'])(null, {getFromState: ['tes.ting']})).not.toThrow();

        expect(()=>curryStateToPropsMapper(null, 'one.two')(null, {})).not.toThrow();
        expect(()=>curryStateToPropsMapper(null, 'one.two')(null, {getFromState: 'tes.ting'})).not.toThrow();
        expect(()=>curryStateToPropsMapper(null, 'one.two')(null, {getFromState: ['tes.ting']})).not.toThrow();
        expect(()=>curryStateToPropsMapper(null, ['one.two'])(null, {})).not.toThrow();
        expect(()=>curryStateToPropsMapper(null, ['one.two'])(null, {getFromState: 'tes.ting'})).not.toThrow();
        expect(()=>curryStateToPropsMapper(null, ['one.two'])(null, {getFromState: ['tes.ting']})).not.toThrow();
    });
    it('does not throw an error when merging curryActionsWith properties', function () {
        expect(()=>curryStateToPropsMapper('one.two')(null, {})).not.toThrow();
        expect(()=>curryStateToPropsMapper('one.two')(null, {curryActionsWith: 'tes.ting'})).not.toThrow();
        expect(()=>curryStateToPropsMapper('one.two')(null, {curryActionsWith: ['tes.ting']})).not.toThrow();
        expect(()=>curryStateToPropsMapper(['one.two'])(null, {})).not.toThrow();
        expect(()=>curryStateToPropsMapper(['one.two'])(null, {curryActionsWith: 'tes.ting'})).not.toThrow();
        expect(()=>curryStateToPropsMapper(['one.two'])(null, {curryActionsWith: ['tes.ting']})).not.toThrow();

        expect(()=>curryStateToPropsMapper(null, 'one.two')(null, {})).not.toThrow();
        expect(()=>curryStateToPropsMapper(null, 'one.two')(null, {curryActionsWith: 'tes.ting'})).not.toThrow();
        expect(()=>curryStateToPropsMapper(null, 'one.two')(null, {curryActionsWith: ['tes.ting']})).not.toThrow();
        expect(()=>curryStateToPropsMapper(null, ['one.two'])(null, {})).not.toThrow();
        expect(()=>curryStateToPropsMapper(null, ['one.two'])(null, {curryActionsWith: 'tes.ting'})).not.toThrow();
        expect(()=>curryStateToPropsMapper(null, ['one.two'])(null, {curryActionsWith: ['tes.ting']})).not.toThrow();
    });
    it('throws an error if stateDefs exists, but is neither string nor array', function () {
        expect(()=>curryStateToPropsMapper(1234)).toThrowError('"stateDefs" must be an array or a string, instead got number');
        expect(()=>curryStateToPropsMapper({})).toThrowError('"stateDefs" must be an array or a string, instead got object');
        expect(()=>curryStateToPropsMapper(false)).toThrowError('"stateDefs" must be an array or a string, instead got boolean');
        expect(()=>curryStateToPropsMapper(true)).toThrowError('"stateDefs" must be an array or a string, instead got boolean');
    });
    it('throws an error if curry exists, but is neither string nor array', function () {
        expect(()=>curryStateToPropsMapper(null, 1234)).toThrowError('"curry" must be an array or a string, instead got number');
        expect(()=>curryStateToPropsMapper(null, {})).toThrowError('"curry" must be an array or a string, instead got object');
        expect(()=>curryStateToPropsMapper(null, false)).toThrowError('"curry" must be an array or a string, instead got boolean');
        expect(()=>curryStateToPropsMapper(null, true)).toThrowError('"curry" must be an array or a string, instead got boolean');
    });

    describe('discard null or empty function', function () {
        it('returns false if both items contain data', function () {
            expect(discardNullOrEmpty('one.two', 'tes.ting')).toBe(false);
        });
        it('returns null if both items are null or empty', function () {
            expect(discardNullOrEmpty()).toBeUndefined();
            expect(discardNullOrEmpty('', [])).toBeUndefined();
            expect(discardNullOrEmpty([], '')).toBeUndefined();
        });
        it('returns first item if it has data and second is null or empty', function () {
            let first = 'one.two';
            expect(discardNullOrEmpty(first, null)).toBe(first);
            expect(discardNullOrEmpty(first, '')).toBe(first);
            expect(discardNullOrEmpty(first, [])).toBe(first);
        });
        it('returns second item if it has data and first is null or empty', function () {
            let second = 'tes.ting';
            expect(discardNullOrEmpty(null, second)).toBe(second);
            expect(discardNullOrEmpty('', second)).toBe(second);
            expect(discardNullOrEmpty([], second)).toBe(second);
        });
    })
}
