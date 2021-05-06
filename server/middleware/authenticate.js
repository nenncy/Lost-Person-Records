const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

/*
const Authenticate = async (req, res, next) => {
    try{
        const token = res.cookies.jwtoken;
        console.log(token);
        //const token  = getToken({_id: req.user._id});
        //console.log(token);
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        console.log(token);
        console.log(rootUser);
        //if user not found.
        if(!rootUser) { throw new Error('User not found') }
        //if user exits
        req.token = token;
        console.log(req.token);
        req.rootUser = rootUser;
        console.log(req.token);
        req.userID = rootUser._id;
        
        next();
    } catch(err) {
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
} */

const Authenticate = async (req, res, next) => {
    const token = req.cookies.jwtoken || '';
    console.log(token);
    
    try {
      if (!token) {
        return res.status(401).json('You need to Login')
      }
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
      if(!rootUser) { throw new Error('User not found') }
      /*req.token = token;
      console.log(req.token);
      req.rootUser = rootUser;  
      req.userID = rootUser._id; */
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };

module.exports = Authenticate;