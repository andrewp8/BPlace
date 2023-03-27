const { REPLACEMEs } = require('../models/REPLACEME.model');
module.exports = {
  getAll: (req, res) => {
    REPLACEMEs.find()
      .then(allREPLACEMEs => {
        res.json(allREPLACEMEs)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  getOne: (req, res) => {
    REPLACEMEs.findOne({ _id: req.params.id })
      .then(REPLACEME => {
        res.json(REPLACEME)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  },
  create: (req, res) => {
    REPLACEMEs.create(req.body)
      .then(REPLACEME => res.json(REPLACEME))
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  update: (req, res) => {
    REPLACEMEs.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then(updatedREPLACEME => {
        res.json(updatedREPLACEME)
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      })
  },
  delete: (req, res) => {
    REPLACEMEs.deleteOne({ _id: req.params.id })
      .then(delConfirm => {
        res.json(delConfirm);
      })
      .catch(err => {
        res.status(400).json({ message: 'Something went wrong', error: err })
      });
  }
}

