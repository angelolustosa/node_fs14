const http = require('http')

const HOST = 'localhost'
const PORT  = 5000

const server = http.createServer((req, res) => {
    res.end('Oi, estou funcionado com nodemon!')
})

server.listen(PORT, HOST, () => {
    console.log(`Servidor Rodando: http://${HOST}:${PORT}/`);
})