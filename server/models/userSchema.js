const mongoose = require('mongoose');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchmea = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

})



//hasing password.
userSchmea.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});


//generating a token
userSchmea.methods.generateAuthToken = async function () {
    try {
        const expiration = process.env.DB_ENV === 'testing' ? 100 : 604800000;
        let gettoken = jwt.sign({_id:this._id}, process.env.SECRET_KEY, {
            expiresIn: process.env.DB_ENV === 'testing' ? '1d' : '7d',
      });
       this.tokens = this.tokens.concat({ token: gettoken });
       await this.save();
       return gettoken;
    }catch(err) {
        console.log(err);
    }
}


const User = mongoose.model('USER', userSchmea);

module.exports = User;