const { properties } = require('../models/property.model');
module.exports = {
  getAll: (req, res) => {
    properties.find()
      .then(allProperties => {
        res.json(allProperties)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  getOne: (req, res) => {
    properties.findOne({ _id: req.params.id })
      .then(property => {
        res.json(property)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  create: (req, res) => {
    properties.create(req.body)
      .then(property => res.json(property))
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  update: (req, res) => {
    properties.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then(updatedProperty => {
        res.json(updatedProperty)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  delete: (req, res) => {
    properties.deleteOne({ _id: req.params.id })
      .then(delConfirm => {
        res.json(delConfirm);
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  }
}

