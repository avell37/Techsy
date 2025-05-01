const Router = require('express');
const router = new Router();
const OAuthController = require('../controllers/oauthController');

router.post('/google', OAuthController.googleAuth)

module.exports = router;