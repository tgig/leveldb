//I am going to try and re-write the previous page using .map for the 
//  data so there is no need for a forEach loop

var level = require('level');
var fs = require('fs');

var dbPath = process.argv[2];
var db = level(dbPath);
var filePath = process.argv[3];


fs.readFile(filePath, 'utf8', function(err, data) {
  var splitData = data.split('\n');

  var arr = splitData.map(function (line) {
    var thisLine = line.split(',');
    return {
      "type": thisLine[0],
      "key": thisLine[1],
      "value": thisLine[2] || null
    };
  });

  db.batch(arr, function(err) {
    if (err) return console.error('Error: ' + err);
    console.error('Success!');
  });
});