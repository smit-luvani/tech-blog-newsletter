const request = require('supertest');
const assert = require('assert');
const app = require('../app');

const PUBLIC_ROUTE = '/public/newsletter'
const ADMIN_ROUTE = '/admin/newsletter'

describe('Public > Newsletter', () => {
    it('It should return error for not passing values', function (done) {
        request(app)
            .post(PUBLIC_ROUTE + '/subscribe')
            .expect(400)
            .end(function (err, res) {
                if (err) throw done(err);
                done();
            });
    });

    it('It should return error for passing invalid email', function (done) {
        request(app)
            .post(PUBLIC_ROUTE + '/subscribe')
            .send({ email: 'test', subscriber_name: 'test', frequency: 'daily', country: 'US' })
            .expect(400)
            .end(function (err, res) {
                if (err) throw done(err);
                done();
            });
    });
});

describe('Admin > Newsletter', () => {
    it('It should return list of subscribed newsletter', function (done) {
        request(app)
            .get(ADMIN_ROUTE + '/get')
            .expect(200)
            .end(function (err, res) {
                if (err) throw done(err);
                done();
                assert.equal(Array.isArray(res.body?.data), true);
            });
    });
});
