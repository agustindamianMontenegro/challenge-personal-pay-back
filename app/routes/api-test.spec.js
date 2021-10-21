const { get } = require('superagent');
const request = require('supertest');
const app = require ('./../../app');


it('try route location' , done => {
    request(app)
    .get('/v1/location')
    .set('Accept' , 'application/json')
    .set('x-forwarded-for' , '190.111.229.189')
    .expect('Content-Type', /json/)
    .expect(200, done)
})

it('try route current by ip' , done => {
    request(app)
    .get('/v1/current/')
    .set('Accept' , 'application/json')
    .set('x-forwarded-for' , '190.111.229.189')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err,res) => {
        if(res.body.ubicacionApiIP && res.body.weatherInfo) {
           return done()
        } else { 
            return done(err)
        }
    })
})

it('try route current by city' , done => {
    request(app)
    .get('/v1/current/buenos aires')
    .set('Accept' , 'application/json')
    .set('x-forwarded-for' , '190.111.229.189')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err,res) => {
        if(res.body.city === 'Buenos Aires'&& res.body.weatherInfo) {
           return done()
        } else { 
            return done(err)
        }
    })
})


it('try route forecast by city' , done => {
    request(app)
    .get('/v1/forecast/buenos aires')
    .set('Accept' , 'application/json')
    .set('x-forwarded-for' , '190.111.229.189')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err,res) => {
        if(res.body.city && res.body.weatherInfo.length === 6) {
           return done()
        } else { 
            return done(err)
        }
    })
})

it('try route forecast by ip' , done => {
    request(app)
    .get('/v1/forecast')
    .set('Accept' , 'application/json')
    .set('x-forwarded-for' , '190.111.229.189')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err,res) => {
        if(res.body.city && res.body.weatherInfo.length === 6) {
           return done()
        } else { 
            return done(err)
        }
    })
})
