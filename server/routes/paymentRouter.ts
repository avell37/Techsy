const {Router} = require('express');
const router = new Router();
const PaymentController = require('../controllers/paymentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/order', authMiddleware, PaymentController.createOrder)
router.post('/', PaymentController.createPayment)

module.exports = router;