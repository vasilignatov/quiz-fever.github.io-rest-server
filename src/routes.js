const router = require('express').Router();
const authController = require('./controllers/auth-controller');

router.use('/users', authController);

module.exports = router;