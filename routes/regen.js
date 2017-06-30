var express = require('express');
var router = express.Router();

/* Regenerate new json from csv*/
router.get('/', function(req, res, next) {
  res.send('Regenerate the json file');
  var input_file = __dirname + "/../data/test.csv";
  var output_file = __dirname + "/../data/test_new.json";

  var Converter=require("csvtojson").Converter;
  var csvConverter=new Converter({constructResult:false, toArrayString:true, trim:true, flatKeys:true});

  var readStream=require("fs").createReadStream(input_file);
  var writeStream=require("fs").createWriteStream(output_file);

  readStream.pipe(csvConverter).pipe(writeStream);

});

module.exports = router;
