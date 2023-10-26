const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const quizService = require('../services/quiz-service');

// Get Quizes 
router.get('/Quiz',
    async (req, res) => {
        try {
            const quizes = await quizService.getAll();
            res.json(quizes);
        } catch (error) {
            res.json({ error });
        }
    });

// Get most-recent
router.get('/Quiz/most-recent',
    async (req, res) => {
        const query = req.query.order;
        console.log(query);
        try {
            // if (query == 'createdAt') {
            const lastQuiz = await quizService.getMostRecent();
            console.log(lastQuiz);
            res.json(lastQuiz);
            // return array with most recent quiz
            // } else {
            // const quizes = await quizService.getAll();
            // res.json(quizes);
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    });


// Get Quiz by id
router.get('/Quiz/:id',
    async (req, res) => {
        try {
            const quiz = await quizService.getQuiz(req.params.id);
            res.json(quiz);
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    });


// Create Quiz
router.post('/Quiz',
    isAuth,
    async (req, res) => {
        const { title, topic, description, questionCount, owner } = req.body;
        try {
            const quiz = await quizService.create({ title, topic, description, questionCount, owner });
            res.json(quiz);
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
);


// Update Quiz by id
router.put('/Quiz/:id',
    isAuth,
    async (req, res) => {
        try {
            const quiz = await quizService.updateQuiz(req.params.id, req.body);
            res.json(quiz);
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
);

// Delete quiz
router.delete('/Quiz/:id',
    isAuth,
    async (req, res) => {
        try {
            await quizService.deleteQuiz(req.params.id);
            res.json({ ok: true });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
);

module.exports = router;