const request  = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('utils',()=>{
    describe('#user',()=>{
        it("Should return an user",(done)=>{
            request(app)
                .get('/users')
                .expect(200)
                .expect((res)=>{
                    expect(res.body).toInclude({
                        name:'Abhishek S',
                        age:25
                    })
                })
                .end(done)
        });
    });
    it('Should return Hello world response',(done)=>{
        request(app)
            .get('/')
            .expect(404)
            .expect((res)=>{
                expect(res.body).toInclude({
                    errMessage:"Page Not Found"
                })
            })
            .end(done);
    });


});

it('Should return Hello world response',(done)=>{
    request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
           expect(res.body).toInclude({
               errMessage:"Page Not Found"
           })
        })
        .end(done);
});

it("Should return an user",(done)=>{
  request(app)
      .get('/users')
      .expect(200)
      .expect((res)=>{
          expect(res.body).toInclude({
              name:'Abhishek S',
              age:25
          })
      })
      .end(done)
});