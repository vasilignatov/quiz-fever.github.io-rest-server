const router = require('express').Router();
const { json } = require('express');
const questionService = require('../services/question-service');

// Create Question
router.post('/Question', async (req, res) => {
    try {
        const question = await questionService.create(req.body);
        console.log(question);
        res.json(question);
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
});

// Create Question
// router.post('/Question', (req, res) => {
//     try {
//         const question = await questionService.create(req.body);
//         res.json(question);
//     } catch (error) {
//         console.log(error);
//         res.json({ error });
//     }
// });



module.exports = router;