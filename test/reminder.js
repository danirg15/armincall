const mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

const Reminder = require('../models/reminder');

//https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai

chai.use(chaiHttp);

//Our parent block
describe('Reminders', () => {
    beforeEach((done) => { //Before each test we empty the database
        Reminder.remove({}, (err) => { 
           done();         
        });     
    });
/*
  * Test the /GET route
  */
  describe('/GET reminder', () => {
      it('it should GET all the reminders', (done) => {
        chai.request(server)
            .get('/api/reminders')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});