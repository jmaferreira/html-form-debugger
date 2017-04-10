var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { 'params': req.query , 'request': req, 'headers': req.headers});
});


router.post('/', function(req, res, next) {
  var requestInfo = {};
  res.render('index', { 'params': req.body , 'request': req,  'headers': req.headers});
});


module.exports = router;
