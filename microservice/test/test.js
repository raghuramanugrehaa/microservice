var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../index');

chai.use(chaiHttp)
describe ('App',function(){

    it('this is description part',function() {

        chai.request(server)
            .get('/')
            .end(function (err,res) {
                res.should.have.statusCode(200);
            });
    });

    it('this is descp',function(){
        chai.request(server)
            .get('/contacts')
            .end(function (err,res) {

                res.should.have.statusCode(200);
            });
    })
    it('this is delete',function(){
        chai.request(server)
            .get('/contacts/id')
            .end(function (err,res) {

                res.should.have.statusCode(200);
            });
    })

    it('this is update',function(){
        chai.request(server)
            .post('/contacts/new')
            .end(function (err,res) {

                res.should.have.statusCode(201);
            });
    })
    it('this is delete',function(){
        chai.request(server)
            .delete('/contacts/:id')
            .end(function (err,res) {

                res.should.have.statusCode(200);
            });
    })

});