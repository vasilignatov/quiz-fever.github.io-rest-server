const router = require('express').Router();
const authController = require('./controllers/auth-controller');
const quizController = require('./controllers/quiz-controller');

router.use('/users', authController);
router.use('/classes', quizController);

module.exports = router;