const router = require('express').Router();

// Create Question
router.post('/Question', (req, res) => {
    console.log(req.body);
});

module.exports = router;