

module.exports = {
  pwd: function() {
    process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
      if (cmd === 'pwd') {
    process.stdout.write(__filename);
    }
  })

  process.stdout.write('\nprompt > ');
},

  ls: function() {
    // console.log("ran")
  //   var fs = require('fs');
  //   fs.readdir('.', function(err, files) {
  //   if (err) throw err;
  //     files.forEach(function(file) {
  //   process.stdout.write(file.toString() + "\n");
  // })
  // process.stdout.write("prompt > ");
// });
  }
}


