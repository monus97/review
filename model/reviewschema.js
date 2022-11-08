const mongoose=require('mongoose');
const reviewschema=new mongoose.Schema({
    userId:{type:mongoose.Schema.type.objectId,
    require:true,
    ref:"user"},

    companyId:{
        type:mongoose.Schema.type.objectId,
        require:true,
        ref:"company"
    },
    review:{
        type:String,
        require:true
    },
    rating:{
        type:number,
        default:0
    },
    is_Active:{
        type:Boolean,
        require:true
    }
})
reviewschema.set("timestamps",true)
module.exports=mongoose.model('user',reviewschema)