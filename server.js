import http from 'node:http'

const server = http.createServer((req, res) => {
    res.write('Servido no ar!')

    return res.end()
})

server.listen(5000) 

//https://nodejs.dev/pt/learn/
// https://www.w3schools.com/nodejs/(require)
/* import http from 'http'

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */


//node server.js