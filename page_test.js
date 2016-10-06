(function() {

    "use strict";

    Feature('Testing pages');

    let server = require('./server');

    AfterSuite((I) => {
        server.close();
    });

    BeforeSuite((I) => { // or Background
        server.start();
    });

    Scenario('Test for response 200', (I) => {

        I.customAmOnPage('/page200');
        I.getServerResponseCode(200);

    });

    Scenario('Test for response 404', (I) => {

        I.customAmOnPage('/page404');
        I.getServerResponseCode(404);

    });

    Scenario('Test for response 500', (I) => {

        I.customAmOnPage('/page500');
        I.getServerResponseCode(500);
    });

}());
