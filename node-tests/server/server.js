const express  = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(404).send({
        errMessage:"Page Not Found",
        name:"some text here.."
    });
});

app.get('/users',(req,res)=>{
    res.send([
        {
            name:"Abhishek S",
            age:25
        },
        {
            name:"numa",
            age:20
        }
    ])
});

app.listen(3000,()=>{
   console.log("Server is started at port 3000");
});

module.exports = {
    app
};