export const state = {
    firstLevel: {
        secondLevel: {
            value: 'second level test value'
        },
        second: null,
        arr: ['one', 'two', {value: 'array test value'}],
        test: 'first level test value',
        nothing: null
    }
};

let testAction = (...args) => args.join();
export const actions = {
    CURRY: ['firstLevel.secondLevel.value', 'firstLevel.test'],
    testAction1: testAction,
    testAction2: testAction,
    testAction3: testAction,
    testAction4: testAction,
    testAction5: testAction,
};