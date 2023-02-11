// Check correct environment

const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Testing Server', () => {
    it('Check server is sending health information', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                assert(res.body?.data?.NODE_ENV == 'test');
                done();
            });
    });
});