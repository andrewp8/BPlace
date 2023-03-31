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
    required: [true, "Livability is required"],
    max: [101, "Livability's point can't be over 100"]
  },
  amenities: {
    type: Number,
    required: [true, "Amenities is required"],
    max: [101, "Amenities's point can't be over 100"]
  },
  costOfLiving: {
    type: Number,
    required: [true, "Cost of living is required"],
    max: [101, "Cost of living's point can't be over 100"]
  },
  crime: {
    type: Number,
    required: [true, "Crime is required"],
    max: [101, "Crime's point can't be over 100"]
  },
  employment: {
    type: Number,
    required: [true, "Employment is required"],
    max: [101, "Employment's point can't be over 100"]
  },
  housing: {
    type: Number,
    required: [true, "Housing is required"],
    max: [101, "Housing's point can't be over 100"]
  },
  school: {
    type: Number,
    required: [true, "School is required"],
    max: [101, "School's point can't be over 100"]
  },
}, { timestamps: true });
module.exports.areas = mongoose.model('areas', AreaSchema);