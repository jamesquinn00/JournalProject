// Importing the test package
const request = require('supertest');

// importing the server 
const server = require('../app');

// importing the data file 
const data = require('../data');

describe('API server', () => 
{
    let api;

    beforeAll(() => 
    {
        // start server and store in api variable 
        api = server.listen(3000, () =>
        console.log('Test server running on port 3000')
        );
    });

    afterAll((done) => 
    {
        // Close the server, then run done 
        console.log('Stopping the server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => 
    {
        request(api).get('/').expect(200, done);
    });

    // requires more responses depending on functionality 
})