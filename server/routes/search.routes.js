const SearchController = require('../controllers/search.controller');

module.exports = (app) => {
  app.get('/api/searches', SearchController.getAll);
  app.post('/api/searches', SearchController.create);
  app.get('/api/searches/:id', SearchController.getOne);
  app.get('/api/last', SearchController.getLast);
  app.put('/api/searches/edit/:id', SearchController.update);
  app.delete('/api/searches/:id', SearchController.delete)
};