const { favorites } = require('../models/favorite.model');
module.exports = {
  getAll: (req, res) => {
    favorites.find()
      .then(allFavorites => {
        res.json(allFavorites)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  getOne: (req, res) => {
    favorites.findOne({ _id: req.params.id })
      .then(favorite => {
        res.json(favorite)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  create: (req, res) => {
    favorites.create(req.body)
      .then(favorite => res.json(favorite))
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  update: (req, res) => {
    favorites.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then(updatedFavorite => {
        res.json(updatedFavorite)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  delete: (req, res) => {
    favorites.deleteOne({ _id: req.params.id })
      .then(delConfirm => {
        res.json(delConfirm);
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  }
}

