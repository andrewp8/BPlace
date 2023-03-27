const mongoose = require('mongoose');
const REPLACEME_Schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [2, "Title must be at least 2 characters"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be at least $0"]
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [2, "Description must be at least 2 characters"]
  }
}, { timestamps: true });
module.exports.REPLACEMEs = mongoose.model('REPLACEMEs', REPLACEME_Schema);