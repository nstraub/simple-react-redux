describe('simple react redux spec', ()=>{
    beforeAll(() => spyOn(console, 'error'));

    require('./traverse_spec');
    require('./map-state-to-props_spec');
});
