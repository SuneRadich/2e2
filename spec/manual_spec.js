var request = require("request");
//var helloWorld = require("../server/app.js")
var baseUrl = "http://localhost:3000/"

describe("Hello World Server", function() {

    describe("GET /", function() {

        it('retuns status code 200', function(done) {
            request.get(baseUrl, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });

        });

        it("returns status code 404", function(done) {
            request.get(baseUrl + 'page404/', function(error, response, body) {
                expect(response.statusCode).toBe(404);
                done();
            });
        });

        it("returns Hello World", function(done) {
            request.get(baseUrl + 'page500', function(error, response, body) {
                expect(response.statusCode).toBe(500);
                done();
            });
        });
        
    });
});
