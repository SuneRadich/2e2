
Feature('Testing pages');

Scenario('Test for response 200', (I) => {

    //let url = 'http://localhost:3000';
    let url = 'http://implementconsultinggroup.com';

    //I.getServerResponseCode(url, 200);

    I.customAmOnPage(url);

    I.getServerResponseCode(200);
    I.seeInTitle('Management consulting | Implement Consulting Group');


});
