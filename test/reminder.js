const mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

const Reminder = require('../models/reminder');

//https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai

chai.use(chaiHttp);

describe('Reminders', () => {
    beforeEach((done) => { //Before each test we empty the database
        Reminder.remove({}, (err) => { 
           done()    
        })  
    })


    describe('/GET reminder', () => {
        it('it should GET all the reminders', (done) => {
          chai.request(server)
              .get('/api/reminders')
              .end((err, res) => {
                  res.should.have.status(200)
                  res.body.should.be.a('array')
                  res.body.length.should.be.eql(0)
                done()
              })
        })
    })


    describe('/POST reminder', () => {
        it('it should not POST a reminder without description', (done) => {
          let reminder = {
              'date': '15/12/2012',
              'time': '15:30'
          }
          chai.request(server)
              .post('/api/reminders')
              .send(reminder)
              .end((err, res) => {
                  //let response = JSON.parse(res.text)


                  res.should.have.status(400)
                  res.body.should.be.a('object')
                  //res.body.should.have.property('status')
                  //res.body.errors.should.have.property('p');
                  //res.body.errors.pages.should.have.property('kind').eql('required');
                done()
              })
        })
    })

})