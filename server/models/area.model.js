const mongoose = require('mongoose');
const AreaSchema = new mongoose.Schema({
  zipcode: {
    type: Number,
    required: [true, "Zip-code is required"],
    min: [00501, "Smallest zip-code in US is 00501"],
    max: [99999, "Only enter 5 digits zip-code pattern"]
  },
  population: {
    type: Number,
    required: [true, "Population is required"]
  },
  livability: {
    type: Number,
    required: [true, "Livability is required"]
  },
  amenities: {
    type: String,
    required: [true, "Amenities is required"],
    maxLength: [2, "Amenities's max length is 2 characters"]
  },
  costOfLiving: {
    type: String,
    required: [true, "Cost of living is required"],
    maxLength: [2, "Cost of living's max length is 2 characters"]
  },
  crime: {
    type: String,
    required: [true, "Crime is required"],
    maxLength: [2, "Crime's max length is 2 characters"]
  },
  employment: {
    type: String,
    required: [true, "Employment is required"],
    maxLength: [2, "Employment's max length is 2 characters"]
  },
  housing: {
    type: String,
    required: [true, "Housing is required"],
    maxLength: [2, "Housing's max length is 2 characters"]
  },
  school: {
    type: String,
    required: [true, "School is required"],
    maxLength: [2, "School's max length is 2 characters"]
  },
}, { timestamps: true });
module.exports.areas = mongoose.model('areas', AreaSchema);