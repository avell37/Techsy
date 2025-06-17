const express = require('express');
const { Router } = require('express');
const router = new Router();
const OrderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create-order', authMiddleware, OrderController.createOrder)
router.post('/create-payment', OrderController.createPayment)
router.post('/webhook/yookassa', express.json(), OrderController.handleWebhook)
router.get('/order-status', OrderController.getOrderStatus)
router.get('/get-orders', authMiddleware, OrderController.getOrders)

module.exports = router;