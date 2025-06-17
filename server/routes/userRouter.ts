const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../utils/fileStorage');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.patch('/change-username', authMiddleware, UserController.changeUsername)
router.patch('/change-email', authMiddleware, UserController.changeEmail);
router.patch('/change-password', authMiddleware, UserController.changePassword);
router.get('/auth', authMiddleware, UserController.check);
router.get('/user', authMiddleware, UserController.getUserData)
router.post('/avatar', authMiddleware, upload.single('avatar'), UserController.uploadAvatar)
router.get('/info', authMiddleware, UserController.getShippingInfo);
router.post('/info', authMiddleware, UserController.saveShippingInfo)

module.exports = router;