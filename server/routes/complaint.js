const router = require('express').Router();
const Complaint = require('../models/complaint.model');
const authenticate = require('../middleware/authenticate');

const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const { json } = require('body-parser');

//const upload= multer({dest:'uploads/'});
//router.use(express.static(__dirname+"./public/"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/uploads/complaintimage');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

//get home page

router.get('/', (req, res) => {
  Complaint.find({}).exec(function (err, data) {
    if (err) {
      console.log('error');
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

router.post('/addcomplaint', upload.single('photo'), async (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    const name = req.body.name;
    const age = Number(req.body.age);
    const pstation = req.body.pstation;
    const pname = req.body.pname;
    const date = Date.parse(req.body.date);
    const photo = req.file.path
      .replace('..\\public', '')
      .replace('../public', '')
      .replace('..public', '');
    const gender = req.body.gender;
    const city = req.body.city;
    const state = req.body.state;
    const description = req.body.description;

    const newComplaint = await Complaint.create({
      name,
      age,
      gender,
      date,
      photo,
      pname,
      pstation,
      city,
      state,
      description,
    });
    console.log('Added!');

    // newComplaint
    //   .save()
    //   .then(() => {
    //     console.log('Added');
    //     res.json('Complaint added!');
    //   })
    //   .catch((err) => res.status(400).json('Error: ' + err));
  } catch (err) {
    console.log(err);
  }
});

router.route('/:id').get((req, res) => {
  Complaint.findById(req.params.id)
    .then((complaint) => res.json(complaint))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.delete('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const complaint = await Complaint.findByIdAndDelete(req.params.id);
    res.json('data deleted.');
  } catch (err) {
    console.log(err);
    res.status(400).json('Error: ' + err);
  }
});

router.put('/update/:id', upload.single('photo'), async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    const updatedComplaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        name: req.body.name,
        age: Number(req.body.age),
        location: req.body.location,
        date: Date.parse(req.body.date),
        photo: req.file
          ? req.file.path
              .replace('..\\public', '')
              .replace('../public', '')
              .replace('..public', '')
          : complaint.photo,
      },
      { new: true, runValidators: true }
    );
    console.log('Updated');
    res.json('complaint updated!');
  } catch (err) {
    console.log(err);
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
