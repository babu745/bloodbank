const { log } = require('console');
const express = require('express');
const app = express();
const router = require('./Router');
const mongoose =require('mongoose');
const cors = require("cors")
const cookieParser = require('cookie-parser')





//body parser
app.use(cookieParser())
app.use(express.json());
app.use(cors({credentials:true,origin:"http://localhost:3000"} ));






//router
app.use('/api',router)


//port
app.listen(5000,()=>{
    console.log("blood bank run 5000 port");
})



//database
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));