const Router = require('express');
const router = new Router();
const DeviceController = require('../controllers/deviceController');
const checkRole = require('../middleware/checkRoleMiddleware');
const { uploadSingle } = require('../middleware/fileMiddleware');

router.post('/', checkRole('Admin'), uploadSingle, DeviceController.create);
router.get('/', DeviceController.getAll);
router.get('/:id', DeviceController.getOne);
router.delete('/:id', checkRole('Admin'), DeviceController.deleteOne);

module.exports = router;