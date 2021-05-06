const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyparser = require('body-parser');
const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');


const app = express(); 
app.use(express.json());

app.use(cookieParser());

dotenv.config({ path: './config.env' });
require('./db/conn');
const PORT = process.env.PORT;


//routerfilelinked
var auth = require('./routes/auth');
app.use('/', auth);

var adminauth = require('./routes/adminauth');
app.use('/', adminauth); 


let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain);
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

app.use(express.json());

const uploadRouter = require('./routes/data');
const ComplaintRouter =require('./routes/complaint');
const ResponseRouter=require('./routes/response');

app.use('/data',uploadRouter);
app.use('/complaint',ComplaintRouter);
app.use('/response',ResponseRouter);


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
