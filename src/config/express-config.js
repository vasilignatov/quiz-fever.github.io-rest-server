const express = require('express');
const cors = require('cors');

const routes = require('../routes');

function config(app) {
    app.use(express.json());
    app.use(cors());
    app.use(routes);
}

module.exports = config;