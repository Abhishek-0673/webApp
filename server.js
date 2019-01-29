const express  = require('express');
const fs = require('fs');
const os = require('os');
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;

const data = os.userInfo();
const name = data.username;

var app = express();

//Middleware
// app.use((req,res,next)=>{
//     res.render('magnence');
// });
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
    const now  = new Date().toString();
    const log  = `${now} :${req.url }`;
    console.log(log);
    fs.appendFile('server-log.log',log + '\n',(err)=>{
        if(err){
            console.log("Unable to append tp append server log!");
        }
    });
    next();
});



// app.get('/magnence',(req,res)=>{
//     res.render('magnence.hbs');
// });
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
   return new Date().getFullYear();
});

hbs.registerHelper('screemIt',(msg)=>{
    return msg.toUpperCase();
});

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    // res.send("<h1>Hello express!</h1>");
    res.render('home.hbs',{
       pageTitle:'Home page',
        username: name,
       currentYear:new Date().getFullYear()
    });
    });
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'About Page',
        Year:new Date().getFullYear()
    });
    });

app.get('/bad',(req,res)=>{
   res.send({
       errMessage:'Bad Request'
   });
});
app.listen(PORT,()=>console.log(`Server is up at port ${PORT}`));