var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'I need a Job',
    user: req.user
  });
});

/* GET about page. */
router.get('/about', function (req, res) {
  res.render('about',
    {
      title: 'About this Site',
      content: 'We will put some stuff here',
      user: req.user
    });
});

module.exports = router;
