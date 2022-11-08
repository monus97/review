const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/cruddb',{ useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open',(req,res)=>{
    console.log("mongo db connection data establish successfully")
})