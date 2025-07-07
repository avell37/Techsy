const Router = require('express');
const router = new Router();
const ReviewController = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, ReviewController.createReview);
router.get('/:deviceId', ReviewController.getReviews);
router.delete('/:id', authMiddleware, ReviewController.deleteReview)

module.exports = router;