const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt =require('bcryptjs');
const adminrouter = express.Router();

require('../db/conn');

const Admin = require('../models/adminSchema');


adminrouter.post('/registeradmin', async (req, res) => {

    const { name, email, password, city, pstation} = req.body;

    if(!name || !email || !password || !city || !pstation ) {
          return res.status(422).json({error: 'Please Enter All Your Details'});
    } 
    try {

        const adminExits =  await  Admin.findOne({email:email});
        if(adminExits) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(422).json({error: 'Email Address Already Exits'});
        }
        else {
            const admin = new Admin({
                name, email, password, city, pstation
            });
            //bcrypting
            await admin.save();
            res.setHeader('Content-Type', 'application/json');
            return res.status(201).json({ message: "Successfully Register"});
        }
    } catch (err) {
        console.log(err);
    }
});


//login route
adminrouter.post('/adminsignin', async  (req, res) => {
    try {
        let token;

        //getting email and password
        const {email, password, city, pstation  } = req.body;

        if(!email || !password || !city || !pstation) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({error: 'Invalid credentials!'});
        }
        const adminLogin = await Admin.findOne({email:email});
           
        token = await adminLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly:true
        });

        if(adminLogin) {
            const ispasswordMatch = await bcrypt.compare(password, adminLogin.password);
        
            if(!ispasswordMatch) {
                res.setHeader('Content-Type', 'application/json');
                return res.status(400).json({message: "Invalid credentials!"});                
            }
            else {
                if(pstation == adminLogin.pstation && city == adminLogin.city ) {
                    
                    res.setHeader('Content-Type', 'application/json');
                    return res.json({message: "Signed In SuccessFully"});
                }
                else {
                    return res.status(400).json({message: "Invalid Credentials"});
                }
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

adminrouter.get('/logout', (req, res) => {
    console.log(`Hello my Logout Page`);
    res.clearCookie('jwtoken', { path: '/'});
    res.status(200).send('User logout');
});


module.exports = adminrouter;