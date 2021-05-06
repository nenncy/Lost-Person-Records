const express = require('express')
const uploadrouter = express.Router();
const Data = require('../models/data.model');

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');


//const upload= multer({dest:'uploads/'});
//router.use(express.static(__dirname+"./public/"));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, '../public/uploads/images');
  },
  filename: function(req, file, cb) {   
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });

//get home page 
uploadrouter.route('/').get((req, res) => {
  Data.find({})
  .exec(function(err,data){
    if(err){
      consol.log("error");
    }
    else
    {
      res.json(data);
    }
  })
});



uploadrouter.post("/upload",upload.single('photo'), (req,res) => {
    const photo=req.file.filename;
    upload(req,res,(err)=>{
     if(err){
       console.log("error")
      }
      else{
        console.log(req.file);
        res.send('test');
      }
   })
})


uploadrouter.post("/add", upload.single('photo'), (req, res ) => {
  console.log(JSON.stringify(req.body));
  
  const username = req.body.username;
  const desc= req.body.desc;
  const location = req.body.location;
  const date = Date.parse(req.body.date);
  
  const photo=req.file.path.replace("..\\public", "").replace("../public", "").replace("..\public", "");
  
  const newData = new Data({
    username,
    desc,
    location,
    date,
    photo,
  
  });

  newData.save()
  .then(() => res.json('Data added!')).catch(err => res.status(400).json('Error: ' + err));
});

uploadrouter.route('/:id').get((req, res) => {
  Data.findById(req.params.id)
    .then(Data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

uploadrouter.route('/:id').delete((req, res) => {
  Data.findByIdAndDelete(req.params.id)
    .then(() => res.json('data deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

uploadrouter.route('/update/:id').post( (req, res) => {
  Data.findById(req.params.id)
    .then(data => {
          data.username = req.body.username;
          data.age= Number(req.body.age);
          data.location = req.body.location;
          data.date = Date.parse(req.body.date);
          data.photo=req.file.path.replace("..\\public", "").replace("../public", "").replace("..\public", "");
         

      data.save()
        .then(() => res.json('data updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = uploadrouter;