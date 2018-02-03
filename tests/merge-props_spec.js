import mergeProps from '../src/merge-props';

export default () => {
    it('merges state and actions properly', () => {
        const result = mergeProps({testState: 'test'}, {testAction: () => 'test'});
        expect(result.testState).toBeDefined();
        expect(result.testAction).toBeDefined();

        expect(result.testState).toBe('test');
        expect(result.testAction()).toBe('test');
    });

    it('curries actions if required', () => {
        const result = mergeProps({CURRY: ['test value 1', 'test value 2']}, {testAction: (...args) => args.join()});

        expect(result.testAction('test value 3')).toBe('test value 1,test value 2,test value 3');
    });

    it('removes CURRY property from state if it exists', () => {
        const result = mergeProps({CURRY: ['test value 1', 'test value 2']}, {testAction: (...args) => args.join()});

        expect(result.CURRY).not.toBeDefined();
    });
};