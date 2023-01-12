const router = require('express').Router();

router.get('/Quiz', (req, res) => {
    console.log('QUIZZZZZ');
    res.send([]);
});

module.exports = router;