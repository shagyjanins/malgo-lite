var express = require('express');
var router = express.Router();

/* GET trade page. */
router.get('/', function (req, res, next) {
  var template_engine = req.app.settings.template_engine;
  res.render('trade', {title: 'Malgo - Express with ' + template_engine});
});

module.exports = router;
