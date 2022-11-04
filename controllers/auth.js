const express = require('express')
const router = express.Router()

//GET: /auth/register => show register form
router.get('/register', (req, res) => {
    res.render('auth/register'), {
        title: 'User Registration'
    }
})

//GET: /auth/login => show login form
router.get('/login', (req, res) => {
    res.render('auth/login'), {
        title: 'Login'
    }
})

module.exports = router