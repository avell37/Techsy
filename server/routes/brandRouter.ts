const Router = require('express');
const router = new Router();
const BrandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('Admin'), BrandController.create);
router.get('/', BrandController.getAll);
router.get('/:id', BrandController.getOne)
router.delete('/:id', checkRole('Admin'), BrandController.deleteOne)

module.exports = router;