const jwt = require('../utils/jwtUtils');
const { COOKIE_NAME, JWT_SECRET } = require('../constants');

exports.auth = async function (req, res, next) {
    let token = req.headers['x-parse-session-token']; 
    
    console.log('Req header auth: ', token);

    if (token != undefined) {
        try {
            console.log('In token!!!!');
            const decoded = await jwt.verify(token, JWT_SECRET);
            req.user = decoded;
            return next();
        } catch (error) {
            res.status(401).json({ message: 'You are not authorized! (auth middleware)' });
        }
    }

    next();
}