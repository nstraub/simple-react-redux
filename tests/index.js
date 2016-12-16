describe('simple react redux spec', ()=>{
    beforeAll(() => spyOn(console, 'error'));

    require('./traverse_spec');
    require('./map-state-to-props_spec');
    require('./map-dispatch-to-props_spec');
});
