const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const complaintSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    pstation: { type: String, required: true },
    date: { type: Date, required: true },
    photo: { type: String },
    pname: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    description: { type: String, required: true },
    gender: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
