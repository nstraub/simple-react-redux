import mapDispatchToProps from '../../src/map-dispatch-to-props';
import curryActionMapper from '../../src/mapper-curry/curry-action-mapper';


export default function () {
    it('returns original mapper when actions is null or not an object', function () {
        expect(curryActionMapper()).toBe(mapDispatchToProps);
        expect(curryActionMapper(null)).toBe(mapDispatchToProps);
        expect(curryActionMapper([])).toBe(mapDispatchToProps);
        expect(curryActionMapper(123)).toBe(mapDispatchToProps);
        expect(curryActionMapper('test string')).toBe(mapDispatchToProps);
    });
    describe('when actions is valid object', function () {
        it('merges with an incoming getFromActions object', function () {
            let curry = {a: 'test', another: 'test'},
                props = {getFromActions:{third: 'test'}};

            curryActionMapper(curry)(null, props);
            expect(props.getFromActions).toEqual({
                a: 'test',
                another: 'test',
                third: 'test'
            });
        });
        it('sets getFromActions if it is undefined', function () {
            let props = {},
                curry = {a: 'test'};

            curryActionMapper(curry)(null, props);
            expect(props.getFromActions).toBe(curry)
        });
        it('gives precedence to incoming getFromActions Object', function () {
            let curry = {a: 'test', another: 'test'},
                props = {getFromActions:{another: 'best'}};

            curryActionMapper(curry)(null, props);

            expect(props.getFromActions).toEqual({a: 'test', another: 'best'});
        });
    });
}
