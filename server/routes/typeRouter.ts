const Router = require('express');
const router = new Router();
const TypeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('Admin'), TypeController.create);
router.get('/', TypeController.getAll);
router.get('/:id', TypeController.getOne)
router.delete('/:id', checkRole('Admin'), TypeController.deleteOne);

module.exports = router;