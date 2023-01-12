const router = require('express').Router();
const userService = require('../services/user-service');
const { COOKIE_NAME } = require('../constants');

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        await userService.register({ username, email, password });

        let { user, token } = await userService.login({ username, password });

        console.log(req.user);
        
        res.cookie(COOKIE_NAME, token);
        res.json({
            sessionToken: token,
            objectId: user._id,
        });
    } catch (err) {
        res.json({
            type: 'error',
            message: 'Register error: ' + err
        });
    }
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    try {
        let { user, token } = await userService.login({ username, password });

        res.json({
            _id: user._id,
            email: user.email,
            authToken: token
        });
    } catch (error) {

    }

});

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.json({ ok: true });
    req.head
});

module.exports = router;