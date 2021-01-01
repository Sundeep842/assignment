const chai= require('chai')
const chaiHtpp = require('chai-http')
const mocha = require('mocha')
const app=require('../server')

chai.use(chaiHtpp)
chai.should()

describe('Make sure it returns 200 ',()=>{
    it('should return 200',(done)=>{

        chai.request(app)
         .get('/')
         .end((err,res)=>{
             res.should.have.status(200)
             res.body.should.be.a('object')
             done()   
    
            })
    })

})