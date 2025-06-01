const Router = require('express');
const router = new Router();
const UserRouter = require('./userRouter');
const BrandRouter = require('./brandRouter');
const TypeRouter = require('./typeRouter');
const DeviceRouter = require('./deviceRouter');
const OAuthRouter = require('./oauthRouter');
const FavoriteRouter = require('./favoriteRouter');
const ReviewRouter = require('./reviewRouter');
const BasketRouter = require('./basketRouter');
const PaymentRouter = require('./paymentRouter');

router.use('/user', UserRouter);
router.use('/brand', BrandRouter);
router.use('/type', TypeRouter);
router.use('/device', DeviceRouter);
router.use('/auth', OAuthRouter);
router.use('/favorite', FavoriteRouter)
router.use('/review', ReviewRouter)
router.use('/basket', BasketRouter)
router.use('/payment', PaymentRouter)

module.exports = router;