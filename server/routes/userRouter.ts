const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const upload = require('../utils/fileStorage');

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.patch('/update', authMiddleware, UserController.changeUserData)
router.get('/auth', authMiddleware, UserController.check);
router.get('/user', checkRoleMiddleware('Admin'), UserController.getUserData)
router.post('/avatar', authMiddleware, upload.single('avatar'), UserController.uploadAvatar)

module.exports = router;