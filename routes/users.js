const express = require('express');
const router = express.Router();

router.get('/register', (req, res, next) => {
    res.send('Register');
});

router.get('/login', (req, res, next) => {
    res.send('Login');
});

module.exports = router;