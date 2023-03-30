const { areas } = require('../models/area.model');
module.exports = {
  getAll: (req, res) => {
    areas.find()
      .then(allAreas => {
        res.json(allAreas)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  getOne: (req, res) => {
    areas.findOne({ _id: req.params.id })
      .then(area => {
        res.json(area)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  getByZipcode: (req, res) => {
    areas.findOne({ zipcode: req.params.zipcode })
      .then(areaByZipcode => {
        res.json(areaByZipcode)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  create: (req, res) => {
    areas.create(req.body)
      .then(area => res.json(area))
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  update: (req, res) => {
    areas.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then(updatedArea => {
        res.json(updatedArea)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  delete: (req, res) => {
    areas.deleteOne({ _id: req.params.id })
      .then(delConfirm => {
        res.json(delConfirm);
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  }
}

