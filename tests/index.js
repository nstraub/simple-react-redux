describe('simple react redux spec', ()=>{
    beforeAll(function () {
        spyOn(console, 'error');
        spyOn(console, 'warn');
    });

    require('./traverse_spec');
    require('./map-state-to-props_spec');
    require('./map-dispatch-to-props_spec');
});
