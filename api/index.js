const express= require ('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secret = 'jbjk;glkk4KJKI5fnuu4ye1pjt';


app.use(express.json());

app.use(cors({credentials:true,origin:'http://localhost:3000'}));

mongoose.connect('mongodb+srv://blog:1234@cluster0.ivaexdy.mongodb.net/pin?retryWrites=true&w=majority');

app.post('/register', async (req,res)=> {
    const {username,password} = req.body;
    try{
        const userDoc = await User.create({username,
            password:bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);
    }catch(e){
        res.status(400).json(e);
    }
    
   // res.json(userDoc);
});

app.post('/login', async(req,res)=> {
    console.log('hi');
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk =bcrypt.compareSync(password, userDoc.password);
    if(passOk){
        //logged in
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token)=>{
           if(err) throw err;
           console.log(token);
           res.cookie('token', token).json('ok');
        });  
        // res.json();
    } else {
        res.status(400).json('wrong credentials');
    }
});

app.listen(4000);

