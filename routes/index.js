var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var template_engine = req.app.settings.template_engine;
  res.render('index', {title: 'Malgo - Express with ' + template_engine});
});

module.exports = router;
