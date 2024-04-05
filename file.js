

const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('created successfully');
});



fs.readFile('welcome.txt', function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });
