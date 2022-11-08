const mongoose =require('mongoose');
const companyschema=new mongoose.Schema({
    companyname:{
                  type:String,
                  require:true

    },
    city:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    state :{
        type:String,
        require:true
    },
    is_Active:{
        type:Boolean,
        default:true
    }
})
companyschema.set("timestamps",true)
module.exports=mongoose.model('company',companyschema)