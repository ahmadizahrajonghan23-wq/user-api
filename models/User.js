const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
name:{type:String,required:true,minlength:3,maxlength:30},
email:{type:String,reqiured:true},
age:{type:Number,required:true, min:1, max:100},
});
module.exports=mongoose.model('User',userSchema);