var command = require('./commands.js')
// console.log(Object.keys(process));
// Output a prompt
// process.stdout.write('prompt > ' );

command.pwd();
// command.ls();
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if (cmd === 'date') {
    var today = new Date();

    process.stdout.write(today.toString());
  }
  // process.stdout.write('\nprompt > ');

});


