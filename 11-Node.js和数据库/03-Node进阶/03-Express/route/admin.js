const express = require('express');

const admin = express.Router();

admin.get('/index', (req, res) => {
    res.send('welcome admin');
})

module.exports = admin;