//
const express= require ('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'jbjk;glkk4KJKI5fnuu4ye1pjt';



app.use(express.json());

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cookieParser());
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

app.post('/login', async (req, res) => {
    try {
        
        const { username, password } = req.body;
        const userDoc = await User.findOne({ username });

        if (!userDoc) {
            return res.status(400).json('User not found');
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (passOk) {
            // Generate a JWT token
            const token = jwt.sign({ username, id: userDoc._id }, secret);

            // Send the token in a cookie
            res.cookie('token', token).json('ok');
        } else {
            res.status(400).json('Wrong credentials');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Internal server error');
    }
});

app.get('/profile',(req,res)=>{
    const {token} = req.cookies;
    jwt.verify(token, secret, {},(err,info) =>{
        if(err) throw err;
         res.json(info);
    });
   //res.json(req.cookies);
});

app.listen(4000);

