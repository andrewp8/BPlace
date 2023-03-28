const { searches } = require('../models/search.model');
module.exports = {
  getAll: (req, res) => {
    searches.find()
      .then(allSearches => {
        res.json(allSearches)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  getOne: (req, res) => {
    searches.findOne({ _id: req.params.id })
      .then(search => {
        res.json(search)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  getLast: (req, res) => {
    searches.find().sort({ _id: -1 }).limit(1)
      .then(lastSearch => {
        res.json(lastSearch)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  create: (req, res) => {
    searches.create(req.body)
      .then(search => res.json(search))
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  update: (req, res) => {
    searches.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then(updatedSearch => {
        res.json(updatedSearch)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  delete: (req, res) => {
    searches.deleteOne({ _id: req.params.id })
      .then(delConfirm => {
        res.json(delConfirm);
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  }
}

