var level = require('level');
var db = level(process.argv[2]);

function getKey(x) {
  if (x >= 100) return;

  db.get('key' + x, function (err, value) {
    if (!err)
      console.log('key' + x + '=' + value);

    getKey(++x);
  });
}

getKey(0);