require('dotenv').config()

const express= require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const path =require('path');
const server=express();


const ProductRouter=require('./routes/product');
const UserRouter=require('./routes/user');
// Body Parasr
server.use(cors());
server.use(express.json());
console.log('env',process.env.DB_PASSWORD);
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use("/products",ProductRouter.routes);
server.use("/users",UserRouter.routes);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})

// db Connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    process.env.MONGO_URL 
  );
    console.log('Database Connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




// passward  91k1MmZAOTJ8WQcV
server.listen(8080,()=>{
    console.log('Server Started')
});