var input_file = __dirname + "/data/test.csv";
var output_file = __dirname + "/data/test.json";

// var fs = require("fs");
// var file = __dirname + "/public/test.csv";
// var csv = require("csvtojson");
// const csvFilePath = './public/test.csv';
// const converter=csv({
//   noheader:true,
//   trim:true
// });
//
// csv()
//     .fromFile(csvFilePath)
//     .on("end_parsed",function(jsonArrayObj){ //when parse finished, result will be emitted here.
//       fs.writeFile(__dirname + "/data/test.test", JSON.stringify(jsonArrayObj), function(err) {
//         if(err) {
//           return console.log(err);
//         }
//         console.log("The file was saved!");
//       });
//     });


/* Prepare the json file from csv */
var Converter = require("csvtojson").Converter;
var csvConverter = new Converter({constructResult: false, toArrayString: true, trim: true, flatKeys: true});

var readStream = require("fs").createReadStream(input_file);
var writeStream = require("fs").createWriteStream(output_file);

readStream.pipe(csvConverter).pipe(writeStream);
