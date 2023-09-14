import { randomUUID } from 'crypto'

export class DatabaseMemory {

    produtos = []

    listAll = () => this.produtos
    
    //list = () => this.produtos.values()

    getById = (idProduto) => this.produtos.find(produto => produto.id === idProduto)
    


    create = (produto) => {
        const produtoId = randomUUID()
        produto.id = produtoId

        console.log()

        this.produtos.push(produto)
    }

    update(id, video) {
        //this.produtos.push(video)
        this.produtos.set(id, video)

    }

    delete(id) {
        this.produtos.delete(id)

    }
}