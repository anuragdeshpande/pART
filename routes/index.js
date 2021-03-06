var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signup', function(req, res, next){
  res.render('signup');
});

router.get('/login', function(req, res, next){
   res.render('login') ;
});

router.post('/login', function(req, res, next){
   res.redirect('/dashboard') ;
});

router.get('/releaseManagement', function (req, res, next) {
    res.render('releaseManagement')
});


router.get('/dashboard', function (req, res, next) {
    res.render('landing');
});


module.exports = router;
