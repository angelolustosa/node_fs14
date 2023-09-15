//const http = require('http')
import http from "http";

const HOST = "localhost";
const PORT = 5000;

const server = createServer((req, res) => {
  res.end("Oi, estou funcionado com nodemon!");
});

get('/teste', (req, res) => {
    
})

server.listen(PORT, HOST, () => {
  console.log(`Servidor Rodando: http://${HOST}:${PORT}/`);
});
