const express=require('express');
var bodyparser =require("body-parser")
var crudschema =require('./model/userschema');
const mongoose = require('mongoose')
const user=require('./model/config');
const userschema = require('./model/userschema');
mongoose.connect('mongodb://127.0.0.1:27017/cruddb',{ useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open',(req,res)=>{
    console.log("mongo db connection data establish successfully")
})
const app=express();
app.use(bodyparser.json());
app.use(express.json())
app.post('/registeruser',async(req,res)=>{
    const email=req.body.email
    const userdata=new userschema({
        name:req.body.name,
        city:req.body.city,
        email:req.body.email,
        number:req.body.number,
        state:req.body.state
    })
    console.log(req.body.name);
    try{ const userExits=await user.findone({email:req.body.email})
    if(userExits){
        return res.status(400).json({status:400,error:"numberAlready exits"});
    } console.log('inside try');
    const addRes=await userdata.save()
    console.log('after try');
    res.json(addRes)

    }
    catch(err){
        res.send('error')
    }
})
app.get('/',(req,res)=>{
    res.send('this is the get request')
})

app.get('/employeelist',async(req,res)=>{
    try{
        console.log('get request')
        const crud=await crudschema.find();res.json(crud)
    }
    catch(err){
        res.send('error'+err)
    }
})

app.listen(8000,(req,res)=>{
    console.log("running to the port:8000");
})

