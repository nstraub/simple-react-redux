import mapDispatchToPropsSpec from './map-dispatch-to-props_spec';
import mapStateToPropsSpec from './map-state-to-props_spec';
import mergePropsSpec from './merge-props_spec';
import traverseSpec from './traverse_spec';
import '../src/extensions';

describe('simple react redux spec', ()=>{
    beforeAll(function () {
        spyOn(console, 'error');
        spyOn(console, 'warn');
    });

    describe('map dispatch to props', mapDispatchToPropsSpec);
    describe('map state to props', mapStateToPropsSpec);
    describe('merge props function', mergePropsSpec);
    describe('object traversal function', traverseSpec);
});
