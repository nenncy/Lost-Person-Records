const uploadrouter = require('express').Router();
const Response = require('../models/response.model');
const authenticate =require('../middleware/authenticate');
uploadrouter.route('/').get((req, res) => {
  Response.find({})
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




uploadrouter.post("/add", (req, res ,next) => {
  console.log(JSON.stringify(req.body));

  const msg = req.body.msg;
  const contact =req.body.contact;
  const username=req.body.username;
  const location=req.body.location;
  const found=req.body.found;
  
   const newResponse = new Response({
    msg,
    contact,
    username,
    location,
    found
});

  newResponse.save()
  
  .then((resp) => { console.log('add', resp); res.statusCode=200; res.setHeader('Content-Type', 'application/json'); res.json(resp)}, (err) => next(err)).catch((err) => next(err));
});

uploadrouter.route('/:id').get((req, res) => {
  Response.findById(req.params.id)
    .then(Data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

uploadrouter.route('/:id').delete((req, res) => {
  Response.findByIdAndDelete(req.params.id)
    .then(() => res.json('data deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = uploadrouter;