const mongoose = require('mongoose');
const PropertySchema = new mongoose.Schema({
  imageUrls: [{
    type: String,
    required: [true, "Image is required"]
  }],
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be at least $0"]
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [2, "Description must be at least 2 characters"]
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    minLength: [2, "Address must be at least 2 characters"]
  },
  city: {
    type: String,
    required: [true, "City is required"],
    minLength: [2, "City must be at least 2 characters"]
  },
  state: {
    type: String,
    required: [true, "State is required"],
    maxLength: [2, "Only enter the state abbreviations"]
  },
  zipcode: {
    type: Number,
    required: [true, "Zip-code is required"],
    min: [00501, "Smallest zip-code in US is 00501"],
    max: [99999, "Only enter 5 digits zip-code pattern"]
  },
  bedrooms: {
    type: Number,
    required: [true, "The number of bedrooms is required"],
    min: [0, "The number of bedrooms must be at least 0"]
  },
  sqft: {
    type: Number,
    required: [true, "Sqft is required"],
    min: [0, "Smallest sqft must be at least 0"]
  }
}, { timestamps: true });
module.exports.properties = mongoose.model('properties', PropertySchema);