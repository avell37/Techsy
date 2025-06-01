const Router = require('express');
const router = new Router();
const BasketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add', authMiddleware, BasketController.addToBasket)
router.post('/increment', authMiddleware, BasketController.incrementDevice)
router.post('/decrement', authMiddleware, BasketController.decrementDevice)
router.get('/', authMiddleware, BasketController.getBasket)
router.delete('/:id', authMiddleware, BasketController.deleteFromBasket)

module.exports = router;