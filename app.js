const config=require('config');
const express=require('express');
const mongoose=require('mongoose');

const userRouter=require('./routers/users');
const app=express();
mongoose.connect(config.get('db.url'))
.then(()=>
console.log('connect to mongodb'))
.catch((err)=>
console.log('could not cannect to mongodb'));

app.use(express.json());
app.use((req,res,next) => {
  console.log  (req.url);
  console.log(req.body);
  next();
});

app.use('/api/users', userRouter);
const port=process.env.PORT || 3000;
app.listen(port,()=> console.log('server on port'+port));