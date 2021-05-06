const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    msg: { type: String },
    contact:{type:Number },
    username:{type:String},
    location:{type:String},
    found:{type:String}
  
  
}, {
  timestamps: true,
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;