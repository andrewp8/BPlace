const PropertyController = require('../controllers/property.controller');

module.exports = (app) => {
  app.get('/api/properties', PropertyController.getAll);
  app.post('/api/properties', PropertyController.create);
  app.get('/api/properties/:id', PropertyController.getOne);
  app.put('/api/properties/edit/:id', PropertyController.update);
  app.delete('/api/properties/:id', PropertyController.delete)
};