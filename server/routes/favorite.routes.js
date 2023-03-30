const FavoriteController = require('../controllers/favorite.controller');

module.exports = (app) => {
  app.get('/api/favorites', FavoriteController.getAll);
  app.post('/api/favorites', FavoriteController.create);
  app.get('/api/favorites/:id', FavoriteController.getOne);
  app.put('/api/favorites/edit/:id', FavoriteController.update);
  app.delete('/api/favorites/:id', FavoriteController.delete)
};