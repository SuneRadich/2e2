
"use strict";

Feature('Testing page response codes');

//Require the mock Express server
let server = require('./../server');

BeforeSuite((I) => { // or Background
    server.start();
});

AfterSuite((I) => {
    server.close();
});

Scenario('Response code 200', (I) => {

    I.customAmOnPage('/page200');
    I.getServerResponseCode(200);

});

Scenario('Response code 404', (I) => {

    I.customAmOnPage('/page404');
    I.getServerResponseCode(404);

});

Scenario('Response code 500', (I) => {

    I.customAmOnPage('/page500');
    I.getServerResponseCode(500);
});
