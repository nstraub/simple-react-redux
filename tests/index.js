describe('simple react redux spec', ()=>{
    dump(new Date().toTimeString());
    beforeAll(function () {
        spyOn(console, 'error');
        spyOn(console, 'warn');
    });

    require('./traverse_spec');
    require('./map-state-to-props_spec');
    require('./map-dispatch-to-props_spec');
    require('./merge-props_spec');
});
