const Router = require('express');
const router = new Router();
const UserRouter = require('./userRouter');
const BrandRouter = require('./brandRouter');
const TypeRouter = require('./typeRouter');
const DeviceRouter = require('./deviceRouter');

router.use('/user', UserRouter);
router.use('/brand', BrandRouter);
router.use('/type', TypeRouter);
router.use('/device', DeviceRouter);

module.exports = router;