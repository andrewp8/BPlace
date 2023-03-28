const mongoose = require('mongoose');
const SearchSchema = new mongoose.Schema({
  searchId: {
    type: String,
    required: [true, "Search id is required"]
  },
}, { timestamps: true });
module.exports.searches = mongoose.model('searches', SearchSchema);