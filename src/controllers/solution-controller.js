const router = require('express').Router();
const solutionService = require('../services/solution-service');


// Get solutions by userId or quizID
router.get('/Solution', async (req, res) => {
    try {
        const owner = JSON.parse(req.query.where).owner;
        console.log(owner);
        if (owner.className == '_User') {
            const result = await solutionService.getSolutionsByUserId(owner.objectId);
            res.json(result);
        } else if (owner.className == 'Quiz') {
            const result = await solutionService.getSolutionsByQuizId(owner.objectId);
            res.json(result);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

// Submit solution
router.post('/Solution', async (req, res) => {
    try {
        let { total, correct, owner, quiz } = req.body;
        quiz = quiz.objectId;
        
        await solutionService.create({ total, correct, owner, quiz });
        
        res.json({ok: true});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

module.exports = router;