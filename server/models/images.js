const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
  
}, {
  timestamps: true,
});

const Image = mongoose.model('IMAGE', imageSchema);

module.exports = Image;