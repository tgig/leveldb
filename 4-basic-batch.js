var level = require('level');
var fs = require('fs');

levelPath = process.argv[2];
filePath = process.argv[3];

var db = level(levelPath);

fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
  var arr = [];
  var rows = [];

  rows = data.split('\n');

  rows.forEach(function (row) {
    thisRow = row.split(',');

    arr.push({
      "type": thisRow[0],
      "key": thisRow[1],
      "value": thisRow[2] || null
    });
  });

  db.batch(arr, function (err) {
    if (err)
      return console.error('Error: ' + err.toString());

    console.error('Great success!');
  });

});