var express = require('express');
var app = express();
var session = require('express-session');
var parser = require("body-parser").json();
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(session({
    secret: 'asvsdv',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000*60*60*24}
}))

app.listen(3001,()=>{
    console.log("server started!");
})

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/getInfo',(req,res)=>{
    if(req.session.username){
        return res.send(req.session.username);
    }
    return res.send("CHUA DANG NHAP");
})

app.post('/login',parser,(req,res)=>{
    var {username,password} = req.body;
    if(username =="hao" && password =="123"){
        req.session.username = username;
      return res.send("DANG NHAP THANH CONG");
    }
    return res.send("DANG NHAP THAT BAI");
})

app.get('/logout',(req,res)=>{
    req.session.username = undefined;
    res.send("DA DANG XUAT");
})