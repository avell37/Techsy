const Router = require('express');
const router = new Router();
const FavoriteController = require('../controllers/favoriteController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, FavoriteController.getFavoriteDevices);
router.post('/', authMiddleware, FavoriteController.toggleFavoriteDevice);

module.exports = router;