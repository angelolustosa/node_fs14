import { randomUUID } from 'crypto'

export class DatabaseMemory {

    produtos = []

    //versão 1
    //listAll = () => this.produtos.filter

    //versão 2 com query parameter
    listAll = (search) => this.produtos.filter(produto => {
        console.log('search', search)
        if(search) {
            return produto.titulo.includes(search)
        }

        // se não achar retornar tudo
        return true
    })
    

    //list = () => this.produtos.values()

    getById = (idProduto) => this.produtos.find(produto => produto.id === idProduto)



    create = (produto) => {
        const produtoId = randomUUID()
        produto.id = produtoId

        this.produtos.push(produto)
    }

    update(id, video) {
        let produto = this.produtos.find(produto => produto.id === id)

        console.log('produto_find', produto)

        produto.titulo = video.titulo
        produto.descricao = video.descricao
        produto.preco = video.preco

        console.log('produto_updated', produto)

        return produto

        /* this.produtos.find(produto => {
            if (produto.id === id) {
                produto.titulo = video.titulo
                produto.descricao = video.descricao
                produto.preco = video.preco

                return produto
            } else {

            }
        }) */
    }


// update(id, video) {
//     let index = this.produtos.findIndex(p => p.id === parseInt(id))
//     console.log('PUT', index)

//     if (index !== -1) {
//         // Encontrou o item com o ID correspondente, atualiza as propriedades
//         produtos[indice] = { ...produtos[indice], ...video };
//         //return true; // Indica que o item foi atualizado com sucesso
//       }

// }

delete (id) {
    this.produtos.delete(id)

}
}