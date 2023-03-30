const mongoose = require('mongoose');
const FavoriteSchema = new mongoose.Schema({
  favoriteId: {
    type: String,
    required: [true, "Favorite id is required"]
  },
}, { timestamps: true });
module.exports.favorites = mongoose.model('favorites', FavoriteSchema);