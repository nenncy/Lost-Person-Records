const mongoose = require('mongoose');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
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
    city: {
        type: String,
        required: true
    },
    pstation: {
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
adminSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

//generating a token
adminSchema.methods.generateAuthToken = async function () {
    try {
       let gettoken = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
       this.tokens = this.tokens.concat({ token: gettoken });
       await this.save();
       return gettoken;
    }catch(err) {
        console.log(err);
    }
}



const Admin = mongoose.model('ADMIN', adminSchema);

module.exports = Admin;