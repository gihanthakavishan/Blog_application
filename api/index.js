const express= require ('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
app.use(cors());
app.use(express.json());

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
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    
});

app.listen(4000);

