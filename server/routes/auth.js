const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs');
const router = express.Router();
const authenticate = require("../middleware/authenticate");
require('../db/conn');
const User = require("../models/userSchema");


router.get('/', (req, res) =>  {
    res.send('Hello world from Server')
});


router.post('/register',async (req, res) => {

    const { name, email, password} = req.body;

    if(!name || !email || !password) {
          return res.status(422).json({error: 'Error'});
    } 
    try {

        const userExits =  await  User.findOne({email:email});
        if(userExits) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(422).json({error: 'Email Exits'});
        }
        else {
            const user = new User({
                name, email, password
            });
            //bcrypting
            await user.save();
            res.setHeader('Content-Type', 'application/json');
            return res.status(201).json({ message: "User Register"});
        }
    } catch (err) {
        console.log(err);
    }
});

//login route
router.post('/signin', async  (req, res) => {
     //getting email and password
     const {email, password } = req.body;

    try {

        let token;
       
        if(!email || !password) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({error: 'Invalid credentials!'});
        }

        const userLogin = await User.findOne({email:email});
           
        token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly:true
        });

        if(userLogin) {
            const ispasswordMatch = await bcrypt.compare(password, userLogin.password);
            if(!ispasswordMatch) {
                res.setHeader('Content-Type', 'application/json');
                return res.status(400).json({message: "Invalid credentials!"});
            }
            else {
                res.setHeader('Content-Type', 'application/json');
                return res.json({message: "Signed In SuccessFully"});
            }
        }
        else {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({message: "Invalid credentials!"});
        }
    } catch(err) {
        console.log(err);
    }
});




router.get('/logout', (req, res) => {
   // console.log(`Hello my Logout Page`);
    res.clearCookie('jwtoken', { path: '/'});
    res.status(200).send('User logout');
});

module.exports = router;