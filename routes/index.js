var express = require('express');
var services = require('./services');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/hello", function(req, res, next) {
	services.sayHello(req, res, next);
});

module.exports = router;
