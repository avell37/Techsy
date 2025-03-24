const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');

router.post('/registration', UserController.registration);
router.get('/login', UserController.login);
router.get('/auth', UserController.check);

module.exports = router;