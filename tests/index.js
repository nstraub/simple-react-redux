describe('simple react redux spec', ()=>{
    dump(new Date().toTimeString());
    beforeAll(function () {
        spyOn(console, 'error');
        spyOn(console, 'warn');
    });

    const testsContext = require.context('./', true, /utils|spec\.js$/);

    testsContext.keys().forEach(testsContext);

    const srcContext = require.context('../src/', true, /.*\.js$/);

    srcContext.keys().forEach(srcContext);
});
