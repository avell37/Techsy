const { YooCheckout } = require('@a2seven/yoo-checkout');

module.exports = new YooCheckout(
    {shopId: process.env.YOOMONEY_SHOP_ID, 
    secretKey: process.env.YOOMONEY_SECRET_KEY
})