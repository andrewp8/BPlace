const REPLACEMEController = require('../controllers/REPLACEME.controller');

module.exports = (app) => {
  app.get('/', REPLACEMEController.getAll);
  app.post('/', REPLACEMEController.create);
  app.get('/:id', REPLACEMEController.getOne);
  app.put('/:id/edit', REPLACEMEController.update);
  app.delete('/:id', REPLACEMEController.delete)
};