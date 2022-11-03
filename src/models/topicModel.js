const mongoose=require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId
const topics=new mongoose.Schema({
 userId:{
        type:ObjectId,
        ref:'userbooks',
        require:true
        },
topics:{
       type:String,    
       require:true,
       trim:true
},
rank:{
     type:Number,
     default:1
}
})
module.exports=mongoose.model('topics',topics)