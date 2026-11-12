const express=require('express');
 const User=require('../models/User');
const router=express.Router();

router.get('/',async(req,res)=>{
    const users=await User.find();
    res.json({data:users, message:'ok'});
});
router.get('/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
           if(!user)
            return res.status(404).json({data:null, message:'user not fount'});
        res.json({data:user, message:'ok'});}
           
    catch(err){
       res.status(400).json({data:null, message:'invalid id'});

    }});
  router.post('/',async(req,res)=>{
    try{
        const user=new User(req.body);
        const result=await user.save();
        res.status(201).json({data:result,message:'ok'});
    }
    catch(err){
        res.status(400).json({data:null, message:err.message})
    }
    });
    router.put('/:id',async(req,res)=>{
        try{
            const user=await User.findById(req.params.id);
            if(!user)
                return res.status(404).json({data:null, message:'user not found'});
            user.set(req.body);
            const result=await user.save();
            res.json({data:result , message:'ok'});}
            catch(err){
                res.status(400).json({data:null, message:err.message});
            }
    });
    router.delete('/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if(!user)
            return res.status(404).json({data:null, message:'user not found'});
        await user.deleteOne();
        res.json({data:user,message:'ok'});
    }
    catch(err){
        res.status(400).json({data:null, message:'invalid id'});
    }
    });
    module.exports=router;