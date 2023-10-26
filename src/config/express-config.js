const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { auth } = require('../middlewares/authMiddleware');
const routes = require('../routes');

function config(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use((req, res, next) => {
        console.log(req.method, ' -> ', req.url);
        next();
    })
    app.use(cookieParser());
    app.use(auth)
    app.use(routes);
}

module.exports = config;