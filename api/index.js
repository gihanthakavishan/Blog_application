const express= require ('express');
const app = express();
const app =require('cors');y


app.arguments(cors());
app.arguments(express.json());

app.post('/register',(req,res)=> {
    const {username,password} = req.body;
    res.json({requestData:{username,password}});
});

app.listen(4000, () => {
    console.log("connection successful");
});