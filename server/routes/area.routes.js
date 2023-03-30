const AreaController = require('../controllers/area.controller');

module.exports = (app) => {
  app.get('/api/areas', AreaController.getAll);
  app.post('/api/areas', AreaController.create);
  app.get('/api/areas/:id', AreaController.getOne);
  app.get('/api/areas/zipcode/:zipcode', AreaController.getByZipcode);
  app.put('/api/areas/edit/:id', AreaController.update);
  app.delete('/api/areas/:id', AreaController.delete)
};