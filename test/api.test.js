const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../app');
const fs = require('fs');
const path = require('path');




describe('Lottery API Tests', function () {

    describe('GET /health', function () {
        it('should return 200 and healthy status', function (done) {
            request(app)
                .get('/health')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    console.log('\nPOSTMAN URL:\n', `${res.request.url}\n`);
                    expect(res.body.status).to.equal('healthy');
                    expect(res.body.service).to.equal('lottery-man-api');
                    done();
                });


        });
    });

    describe('GET /result_prety_list_api2.php', function () {
        const sampleDataPath = path.join(__dirname, '..', 'lr-sample-data.json');
        const sampleData = JSON.parse(fs.readFileSync(sampleDataPath, 'utf8'));

        it('should return 200 and match lr-sample-data.json', function (done) {
            request(app)
                .get('/result_prety_list_api2.php')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    console.log('\nPOSTMAN URL:\n', `${res.request.url}\n`);
                    expect(res.body).to.deep.equal(sampleData);
                    done();
                });


        });

        it('should ignore page and tile_count parameters', function (done) {
            request(app)
                .get('/result_prety_list_api2.php?page=99&tile_count=50')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    console.log('\nPOSTMAN URL:\n', `${res.request.url}\n`);
                    expect(res.body).to.deep.equal(sampleData);
                    done();
                });
        });
    });

});
