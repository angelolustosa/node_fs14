import { fastify } from 'fastify'

const hostname = '127.0.0.1';
const port = 5005;


const server = fastify()


server.get('/', () => {
    return 'Hello World'
})

server.get('/helo', () => {
    return 'Hello FS14'
})

server.get('/node', () => {
    return 'Hello Node'
})

server.listen({
    host: hostname,
    port
}) 

//node index.js