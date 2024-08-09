const { createServer } = require('node:http');

const server = createServer((req, res) => {
  res.end('Hello World');
});

server.listen(3000, () => console.log('ON'));
