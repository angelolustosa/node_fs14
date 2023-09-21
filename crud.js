import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory_list.js';
//import { DatabaseMemory } from './database-memory.js';

const hostname = '127.0.0.1';
const port = 5005;

const server = fastify()

const db = new DatabaseMemory()

//sem request body
server.post('/produto-sem-body', (req, res) => { //res = reply (fastify)
    // Criar um novo produto
    db.create({
        titulo: "Produto 1",
        descricao: "Tenis Nike Air",
        preco: 450.20
    })

    //Visualizar o prodto adicionado
    const produtos = db.listAll()
    console.log(produtos);

    return res.status(201).send() //201 - CREATED
})

// com request body
server.post('/produto', (req, res) => { //res = reply (fastify)
    const { titulo, descricao, preco } = req.body
    // Criar um novo produto
    db.create({
        titulo,
        descricao,
        preco
    })

    //Visualizar o prodto adicionado
    const produtos = db.listAll()
    console.log(produtos);

    return res.status(201).send() //201 - CREATED
})

// deu erro
/* server.get('/produtos-status', (req, res) => {
    const produtos = db.listAll()

    //return res.status(200).send(produtos)

    return res.code(200).json({ data: produtos })
}) */

server.get('/produtos', (e) => {
    const produtos = db.listAll()

    return produtos //por padrão o get retorna o 200
})

server.get('/produtos-search', (req, res) => {
    const search = req.query.search
    console.log('query', search)

    const produtos = db.listAll(search)

    return produtos //por padrão o get retorna o 200
})


server.get('/produto/:id', (req, res) => {
    const produtoId = req.params.id
    const produto = db.getById(produtoId)

    return res.status(200).send(produto)
})

server.put('/produto/:id', (req, res) => {
    const produtoId = req.params.id
    //const { titulo, descricao, preco } = req.body

    const produto = db.update(produtoId, req.body)

    //return res.status(204).send(produto) //sucesso, mas sem conteúdo
    return res.status(200).send(produto) //sucesso, mas sem conteúdo
})

server.delete('/produto/:id', (req, res) => {
    const produtoId = req.params.id
    //const { titulo, descricao, preco } = req.body
    
    const produto = db.delete(produtoId)

    //return res.status(204).send(produto) //sucesso, mas sem conteúdo
    return res.status(200).send(produto) //sucesso, mas sem conteúdo
})

server.listen({
    host: hostname,
    port
})

//node index.js