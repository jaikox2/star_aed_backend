
const request = require('supertest');
const app = require('./../src/app');

describe('GET /resturant', () => {
  it('responds with json and success=true', (done) => {
    return request(app)
      .get('/resturant')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual();
        done();
      });
  });
});
