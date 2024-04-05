
const http = require('http');




const server =http.createServer((req, res) => {
 
  res.writeHead('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>');

 
});

listen(3000, '127.0.0.1')  
  console.log(`Server running at http://127.0.0.1, 3000/`);

