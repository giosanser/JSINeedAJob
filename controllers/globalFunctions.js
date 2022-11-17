const express = require('express')

// make auth check function public so any controller can invoke it for reusability
exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/auth/login')
}