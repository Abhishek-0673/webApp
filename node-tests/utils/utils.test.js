const utils = require('./utils');
const expect = require('expect');


// it('should add two numbers ',()=>{
//     const res = utils.add(33,11);
//     // if(res!== 44){
//     //     throw new Error(`Expected 44 but got ${res}`);
//     // }
//     expect(res).toBe(44).toBeAn;
// });

it("should async add two numbers",(done)=>{
   utils.asyncAdd(10,20,(sum)=>{
       expect(sum).toBe(30);
       done();
   });
});

// it(`should square a number`,()=>{
//    const res = utils.square(10);
//    // if(res!==100){
//    //     throw new Error(`Expected 100 but got ${res}`)
//    // }
//     expect(res).toBe(100).toBeAn;
// });
it("Should async square a number",(done)=>{
    utils.asyncSquare(10,(square)=>{
        expect(square).toBe(100).toBeAn;
        done();
    });
});

it("should expect some value",()=>{
   // expect({name:'abhishek'}).toNotEqual({name:'Abhishek'})
 // expect([1,2,3,4]).toInclude(2);
    expect({
        name:'Abhishek',
        age:25,
        address:'Aralumallige'
    }).toInclude({
        age:25
    })
});

//should verify firstName and lastName were set
it('should verify firstName and lastName were set', ()=> {
    const person = {
        firstName:'',
        lastName:''
    };
    const user = utils.setName(person,"Abhishek S");
    if(user.firstName.length === 0 || user.lastName.length === 0){
        throw Error("Require full name!");
    }

    expect(user).toInclude({
        firstName: 'Abhishek',
        lastName: 'S'
    });
});
